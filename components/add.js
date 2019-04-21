import React, {Component} from 'react';

class Add extends Component {
    addnewTodo(addTodo, e) {
        if(e.which === 13) {
            const user_id = this.getUser();
            addTodo({
                variables: "ssss",
                refetchQueries: [{ query: FetchAllQuery }, { query: getCompletedQuery }]
            });
            e.target.value = "";
        }
    }
    render() {
        return (
            <Mutation>
                {
                    <div>
                        <input type="text" className="form-control inp-todo" placeholder="add your todo..."
                               onKeyPress={this.addnewTodo.bind(this, addTodo)}/>
                        <h4>( Click todo to mark as completed )</h4>
                    </div>

                }
            </Mutation>
        );
    }
}