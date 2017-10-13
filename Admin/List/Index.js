import React, { Component } from 'react';
import List from './List';
import ListStore from './ListStore';

const listStore = new ListStore();
export default  () => (
    <List store={listStore}/>
)