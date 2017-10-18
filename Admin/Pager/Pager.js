/**
 * # Stateless Pager component
 *
 * ## Usage
 * ```
 * <Page current={3}
 *        total={20}
 *        visiblePages={5}
 *        onPageChanged={this.handlePageChanged}
 *        titles={{
 *            first:   "First",
 *            prev:    "Prev",
 *            prevSet: "<<<",
 *            nextSet: ">>>",
 *            next:    "Next",
 *            last:    "Last"
 *        }} />
 * ```
 *
 * ## How it looks like
 * ```
 * First | Prev | ... | 6 | 7 | 8 | 9 | ... | Next | Last
 * ```
 * <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    //     <a className="pagination-previous">Previous</a>
                    //     <a className="pagination-next">Next page</a>
                    //     <ul className="pagination-list">
                    //         <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                    //         <li><span className="pagination-ellipsis">&hellip;</span></li>
                    //         <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                    //         <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                    //         <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                    //         <li><span className="pagination-ellipsis">&hellip;</span></li>
                    //         <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                    //     </ul>
                    // </nav>
 *
 */

import React from 'react';
import PropTypes from 'prop-types';


/**
 * ## Constants
 */
const BASE_SHIFT  = 0;
const TITLE_SHIFT = 1;

const TITLES = {
	first:   'First',
	prev:    '\u00AB',
	prevSet: '...',
	nextSet: '...',
	next:    '\u00BB',
	last:    'Last',
};


/**
 * ## Constructor
 */
class Pager extends React.Component {
	constructor(props) {
		super(props);

		this.handleFirstPage     = this.handleFirstPage.bind(this);
		this.handlePreviousPage  = this.handlePreviousPage.bind(this);
		this.handleNextPage      = this.handleNextPage.bind(this);
		this.handleLastPage      = this.handleLastPage.bind(this);
		this.handleMorePrevPages = this.handleMorePrevPages.bind(this);
		this.handleMoreNextPages = this.handleMoreNextPages.bind(this);
		this.handlePageChanged   = this.handlePageChanged.bind(this);
	}

    /* ========================= HELPERS ==============================*/
	getTitles(key) {
		return this.props.titles[key] || TITLES[key];
	}

    /**
     * Calculates "blocks" of buttons with page numbers.
     */
	calcBlocks() {
		const props = this.props;
		const total = props.total;
		const blockSize = props.visiblePages;
		const current = props.current + TITLE_SHIFT;
		const blocks = Math.ceil(total / blockSize);
		const currBlock = Math.ceil(current / blockSize) - TITLE_SHIFT;

		return {
			total:    blocks,
			current:  currBlock,
			size:     blockSize,
		};
	}

	isPrevDisabled() {
		return this.props.current <= BASE_SHIFT;
	}

	isNextDisabled() {
		return this.props.current >= (this.props.total - TITLE_SHIFT);
	}

	isPrevMoreHidden() {
		const blocks = this.calcBlocks();
		return (blocks.total === TITLE_SHIFT) || (blocks.current === BASE_SHIFT);
	}

	isNextMoreHidden() {
		const blocks = this.calcBlocks();
		return (blocks.total === TITLE_SHIFT) || (blocks.current === (blocks.total - TITLE_SHIFT));
	}

	visibleRange() {
		const blocks = this.calcBlocks();
		const start = blocks.current * blocks.size;
		const delta = this.props.total - start;
		const end = start + ((delta > blocks.size) ? blocks.size : delta);
		console.log([start + TITLE_SHIFT, end + TITLE_SHIFT]);
		return [start + TITLE_SHIFT, end + TITLE_SHIFT];
	}


    /* ========================= HANDLERS =============================*/
	handleFirstPage() {
		if (!this.isPrevDisabled()) {
			this.handlePageChanged(BASE_SHIFT);
		}
	}

	handlePreviousPage() {
		if (!this.isPrevDisabled()) {
			this.handlePageChanged(this.props.current - TITLE_SHIFT);
		}
	}

	handleNextPage() {
		if (!this.isNextDisabled()) {
			this.handlePageChanged(this.props.current + TITLE_SHIFT);
		}
	}

	handleLastPage() {
		if (!this.isNextDisabled()) {
			this.handlePageChanged(this.props.total - TITLE_SHIFT);
		}
	}

    /**
     * Chooses page, that is one before min of currently visible
     * pages.
     */
	handleMorePrevPages() {
		const blocks = this.calcBlocks();
		this.handlePageChanged((blocks.current * blocks.size) - TITLE_SHIFT);
	}

    /**
     * Chooses page, that is one after max of currently visible
     * pages.
     */
	handleMoreNextPages() {
		const blocks = this.calcBlocks();
		this.handlePageChanged((blocks.current + TITLE_SHIFT) * blocks.size);
	}

	handlePageChanged(num) {
		const handler = this.props.onPageChanged;
		console.log(num);
		console.log("-----");
		if (handler) handler(num);
	}


    /* ========================= RENDERS ==============================*/
    /**
     * ### renderPages()
     * Renders block of pages' buttons with numbers.
     * @param {Number[]} range - pair of [start, from], `from` - not inclusive.
     * @return {React.Element[]} - array of React nodes.
     */
	renderPages(pair) {
		return range(pair[0], pair[1]).map((num, idx) => {
			const current = num - TITLE_SHIFT;
			const onClick = this.handlePageChanged.bind(this, current);
			const isActive = (this.props.current === current);
			return (
				<Page
					key={idx}
					index={idx}
					isActive={isActive}
					className="pagination-link is-current"
					onClick={onClick}
					content={num}
				/>
			);
		});
	}


	render() {
		const titles = this.getTitles.bind(this);
		let className = "pagination";
		if (this.props.className) {
			className += " " + this.props.className;
		}

		var lastView;
		if (this.props.current + 3 < this.props.total) {
			lastView = <Page
				className="btn-last-page"
				key="btn-last-page"
				isDisabled={this.isNextDisabled()}
				onClick={this.handleLastPage}
				content={titles('last')}
			/>
		}else {
			lastView = null;
		}
		return (
			<nav className="pagination is-centered" role="navigation" aria-label="pagination">
				<a className="pagination-previous" isDisabled={this.isPrevDisabled()} onClick={this.handlePreviousPage}>Previous</a>
				<a className="pagination-next" isDisabled={this.isNextDisabled()} onClick={this.handleNextPage}>Next page</a>
				<ul className="pagination-list">
					<Page
						className="btn-first-page"
						key="btn-first-page"
						isDisabled={this.isPrevDisabled()}
						onClick={this.handleFirstPage}
						content={titles('first')}
					/>

					{/* <Page
						className="btn-prev-page"
						key="btn-prev-page"
						isDisabled={this.isPrevDisabled()}
						onClick={this.handlePreviousPage}
					>{titles('prev')}</Page> */}

					{/* <Page
						className="btn-prev-more"
						key="btn-prev-more"
						isHidden={this.isPrevMoreHidden()}
						onClick={this.handleMorePrevPages}
					>{titles('prevSet')}</Page> */}
					<li><span className="pagination-ellipsis">&hellip;</span></li>

					{this.renderPages(this.visibleRange())}

					{/* <Page
						className="btn-next-more"
						key="btn-next-more"
						isHidden={this.isNextMoreHidden()}
						onClick={this.handleMoreNextPages}
					>{titles('nextSet')}</Page>

					<Page
						className="btn-next-page"
						key="btn-next-page"
						isDisabled={this.isNextDisabled()}
						onClick={this.handleNextPage}
					>{titles('next')}</Page> */}
					<li><span className="pagination-ellipsis">&hellip;</span></li>
					{lastView}
				</ul>
			</nav>
		);
	}
}

Pager.propTypes = {
	current:           PropTypes.number.isRequired,
	total:             PropTypes.number.isRequired,
	visiblePages:      PropTypes.number.isRequired,
	titles:            PropTypes.object,
	onPageChanged:     PropTypes.func,
};

Pager.defaultProps = {
	titles: TITLES,
};




const Page = (props) => {
	if (props.isHidden) return null;

	const baseCss = props.className ? `${props.className} ` : '';
	const fullCss = `${baseCss}${props.isActive ? ' active' : ''}${props.isDisabled ? ' disabled' : ''}`;

	return (
		// className={fullCss}
		<li key={props.key}>
			<a onClick={props.onClick} className="pagination-link" aria-label='Goto page {props.children}'>{props.content}</a>
		</li>
	);
};

Page.propTypes = {
	isHidden:   PropTypes.bool,
	isActive:   PropTypes.bool,
	isDisabled: PropTypes.bool,
	className:  PropTypes.string,
	onClick:    PropTypes.func,
};


function range(start, end) {
	const res = [];
	for (let i = start; i < end; i++) {
		res.push(i);
	}

	return res;
}

export default Pager;