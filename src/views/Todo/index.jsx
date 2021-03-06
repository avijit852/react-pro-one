import React, { Component } from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            id: null,
            mockData: [{
                id: '1',
                title: 'Buy Milk',
                done: false,
                date: new Date()
            }, {
                id: '2',
                title: 'Meeting with Ali',
                done: false,
                date: new Date()
            }, {
                id: '3',
                title: 'Tea break',
                done: false,
                date: new Date()
            }, {
                id: '4',
                title: 'Go for a run.',
                done: false,
                date: new Date()
            }]
        };
    }
    onSubmitHandle(event) {
        event.preventDefault();
        this.setState({
            mockData: [...this.state.mockData, {
                id: Date.now(),
                title: event.target.item.value,
                done: false,
                date: new Date()
            }]
        });
        event.target.item.value = '';
    }

    onDeleteHandle() {
        let id = arguments[0];
        this.setState({
            mockData: this.state.mockData.filter(item => {
                if (item.id !== id) {
                    return item;
                }
            })
        });
    }

    renderEditForm() {
        if (this.state.edit) {
            return <form onSubmit={this.onUpdateHandle.bind(this)}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
                <button className="update-add-item">Update</button>
            </form>
        }
    }

    onUpdateHandle(event) {
        event.preventDefault();
        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === this.state.id) {
                    item['title'] = event.target.updatedItem.value;
                    return item;
                }
                return item;
            })
        });
        this.setState({
            edit: false
        });
    }

    onEditHandle(event) {
        this.setState({
            edit: true,
            id: arguments[0],
            title: arguments[1]
        });
    }

    onCompleteHandle() {
        let id = arguments[0];
        this.setState({
            mockData: this.state.mockData.map(item => {
                if (item.id === id) {
                    item['done'] = true;
                    return item;
                }
                return item;
            })
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle.bind(this)}>
                    <input type="text" name="item" className="item" />
                    <button className="btn-add-item">Add</button>
                </form>
                {this.renderEditForm()}

                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th colspan="3">Action</th>
                    </tr>
                    {this.state.mockData.map(item => (
                       
                        <tr key={item.id} className={item.done ? 'done' : 'hidden'}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                            </td>
                            <td>
                            <button onClick={this.onCompleteHandle.bind(this, item.id)}>Complete</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
export default Todo;