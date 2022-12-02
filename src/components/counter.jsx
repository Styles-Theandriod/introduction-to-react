import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 1,

        color: 'red'
     } 

     handleIncrement(){
        console.log('Increment Clicked', this);
        // obj.method();
        //function();
     }

   
    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>Zero</span>
                <button onClick={this.handleIncrement()} className='btn btn-secondary btn-sm'>Increment</button>
            </div>
        );
    }

    getBadgeClasses(){
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }


}

<style>
    
</style>
 
export default Counter;






// class Counter extends Component {
//     state = {
//         count:0,
//         tags: ['tag1', 'tag2', 'tag3']
//     };

//     renderTags(){
//         if(this.state.tags.length === 0) return '<p>There are no tags!</p>';
        
//         return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>                   
        
//     }

//     render() { 
//         return <div>
//             {this.state.tags.length === 0 && 'Please create a new tag!'}
//             {this.renderTags()}
//         </div>
//     }
// }
 
// export default Counter;