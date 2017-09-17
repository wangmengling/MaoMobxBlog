import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './Detail.scss'
class Detail extends Component {
    render() {
        return (
            <div className="DetailContent">
                    <div className="DetailTitle title">
                        <div>
                            <font className="DetailTitleFont">My Name Is Wangguozhong</font>
                        </div>
                        
                        <div className="DetailEditButton">
                            <Link to="/admin/editor">
                            <span className="button">
                                编辑
                                </span>
                            </Link>
                        </div>
                        
                    </div>
                    <div className="DetailContentShow"> 
                        <div className="content">
                            <h1>Hello World</h1>
                            <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                            <h2>Second level</h2>
                            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                            <ul>
                                <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                <li>Ut non enim metus.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="DetailContentBottom ">
                            <span className="tag">Tag</span>
                    </div>
                </div>
        );
    }
}
export default Detail;