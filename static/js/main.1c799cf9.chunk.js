(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(e,t,s){},31:function(e,t,s){},42:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(23),a=s.n(c),r=(s(30),s(31),s(43)),o=s(44),l=s(45),h=s(15),j=s(0),d=function(){return Object(j.jsx)(r.a,{color:"dark",dark:!0,expand:"md",children:Object(j.jsxs)(o.a,{className:"ml-auto",children:[Object(j.jsx)(l.a,{children:Object(j.jsx)(h.b,{to:"/cats",className:"site-link",children:"Cat Challenge"})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(h.b,{to:"/search",className:"site-link",children:"Search Challenge"})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(h.b,{to:"/dogs",className:"site-link",children:"Dog Challenge"})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(h.b,{to:"/todo",className:"site-link",children:"ToDo Challenge"})})]})})},u=s(11),b=s(12),m=s(14),p=s(13),O=function(e){return console.log(e.cats),Object(j.jsx)("div",{children:e.cats.map((function(e){return Object(j.jsx)("li",{children:e})}))})},x=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={breeds:["persian","siamese","maine coon","ragdoll","scottish fold","sphynx","british shorthair","bengal","american shorthair"]},n}return Object(b.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)(O,{cats:this.state.breeds})})}}]),s}(n.Component),f=s(46),v=function(){return Object(j.jsxs)(f.a,{className:"App",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"App-intro",children:"To complete this challenge, complete and fix the existing code to have it do the following:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Render the list of cat breeds to the screen"}),Object(j.jsx)("li",{children:"Use props correctly"}),Object(j.jsx)("li",{children:"Use .map() correctly"}),Object(j.jsx)("li",{children:"Ensure there are no errors"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(x,{})]})},g=s(25);var I=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),s=t[0],i=t[1];return Object(j.jsxs)("div",{className:"dog_main",children:[Object(j.jsx)("button",{onClick:function(){fetch("https://dog.ceo/api/breeds/image/random").then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(e){i(e.message)}))},children:"Generate Image!"}),Object(j.jsx)("h3",{children:"Smash the button to see dog pics."}),Object(j.jsx)("img",{src:s,alt:""})]})},k=function(){return Object(j.jsxs)(f.a,{className:"App",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"App-intro",children:"For this challenge, write the logic to accomplish the following:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Fetch a random image from this api: ",Object(j.jsx)("a",{href:"https://dog.ceo/dog-api/",children:"here"})]}),Object(j.jsx)("li",{children:"Save this image URL to the state of the DogIndex component"}),Object(j.jsx)("li",{children:"Render the image to the screen"}),Object(j.jsx)("li",{children:"Have a button that fetches a new image"}),Object(j.jsx)("li",{children:"Make sure to include some good practice error handling"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(I,{})]})},y=s(17),C=s(47),w=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(u.a)(this,s),(e=t.call(this)).state={things:["pen","marker","eraser","notebook","pencil","scissors","highlighter","stapler","paper clip","binder","hole punch","laminator","laminating sheets","protective sheets","index cards"],items:[]},e.searchFunction=e.searchFunction.bind(Object(y.a)(e)),e}return Object(b.a)(s,[{key:"searchState",value:function(){this.setState({items:this.state.things})}},{key:"searchFunction",value:function(e){var t=this.state.things;t=t.filter((function(t){return-1!==t.toLowerCase().search(e.target.value.toLowerCase())})),this.setState({items:t}),console.log(t)}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(C.a,{type:"text",placeholder:"Search Here",onChange:this.searchFunction}),Object(j.jsx)("h3",{children:"Results:"}),Object(j.jsx)("ul",{children:this.state.items.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})]})}}]),s}(n.Component),D=function(){return Object(j.jsxs)(f.a,{className:"App",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"App-intro",children:"In this challenge your goal is to use the existing code to create the following:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"ability to accept a search term from a user"}),Object(j.jsx)("li",{children:"ability to filter the array in the state by that term"}),Object(j.jsx)("li",{children:"ability to display only the terms that match the search, or all if no search term is provided"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(w,{})]})},N=s(22),S=[],A=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"handleCreate",value:function(e){if(e.preventDefault(),this.refs.newItemInput.value){if(-1!==this.props.toDoItems.map((function(e){return e.name})).indexOf(this.refs.newItemInput.value))return alert("This task already exists."),void(this.refs.newItemInput.value="");this.props.createItem(this.refs.newItemInput.value),this.refs.newItemInput.value=""}else alert("Please enter a task name.")}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"create-new",children:Object(j.jsxs)("form",{onSubmit:this.handleCreate.bind(this),children:[Object(j.jsx)("input",{type:"text",placeholder:"New Task",ref:"newItemInput"}),Object(j.jsx)("button",{children:"Add"})]})})}}]),s}(n.Component),F=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={editing:!1},n}return Object(b.a)(s,[{key:"renderName",value:function(){var e={"text-decoration":this.props.completed?"line-through":"none",cursor:"pointer"};return this.state.editing?Object(j.jsx)("form",{onSubmit:this.onSaveClick.bind(this),children:Object(j.jsx)("input",{type:"text",ref:"editInput",defaultValue:this.props.name})}):Object(j.jsx)("span",{style:e,onClick:this.props.toggleComplete.bind(this,this.props.name),children:this.props.name})}},{key:"renderButtons",value:function(){return this.state.editing?Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.onSaveClick.bind(this),children:"Save"}),Object(j.jsx)("button",{onClick:this.onCancelClick.bind(this),children:"Cancel"})]})}):Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.onEditClick.bind(this),children:"Edit"}),Object(j.jsx)("button",{onClick:this.props.deleteItem.bind(this,this.props.name),children:"Delete"})]})})}},{key:"onEditClick",value:function(){this.setState({editing:!0})}},{key:"onCancelClick",value:function(){this.setState({editing:!1})}},{key:"onSaveClick",value:function(e){e.preventDefault(),this.props.saveItem(this.props.name,this.refs.editInput.value),this.setState({editing:!1})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"to-do-item",children:[Object(j.jsx)("span",{className:"name",children:this.renderName()}),Object(j.jsx)("span",{className:"actions",children:this.renderButtons()})]})}}]),s}(n.Component),E=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"renderItems",value:function(){var e=this;return this.props.toDoItems.map((function(t,s){return Object(j.jsx)(F,Object(N.a)(Object(N.a)({},t),e.props),s)}))}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"items-list",children:this.renderItems()})}}]),s}(n.Component),R=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"ToDo List"})})}}]),s}(n.Component),T=function(e){Object(m.a)(s,e);var t=Object(p.a)(s);function s(e){var n;return Object(u.a)(this,s),(n=t.call(this,e)).state={toDoItems:S},n}return Object(b.a)(s,[{key:"createItem",value:function(e){this.state.toDoItems.unshift({name:e,completed:!1}),this.setState({toDoItems:this.state.toDoItems})}},{key:"findItem",value:function(e){return this.state.toDoItems.filter((function(t){return t.name===e}))[0]}},{key:"toggleComplete",value:function(e){var t=this.findItem(e);t.completed=!t.completed,this.setState({toDoItems:this.state.toDoItems})}},{key:"saveItem",value:function(e,t){this.findItem(e).name=t,this.setState({toDoItems:this.state.toDoItems})}},{key:"deleteItem",value:function(e){var t=this.state.toDoItems.map((function(e){return e.name})).indexOf(e);this.state.toDoItems.splice(t,1),this.setState({toDoItems:this.state.toDoItems})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"to-do-app",children:[Object(j.jsx)(R,{}),Object(j.jsx)(A,{toDoItems:this.state.toDoItems,createItem:this.createItem.bind(this)}),Object(j.jsx)(E,{toDoItems:this.state.toDoItems,deleteItem:this.deleteItem.bind(this),saveItem:this.saveItem.bind(this),toggleComplete:this.toggleComplete.bind(this)})]})}}]),s}(n.Component),B=function(){return Object(j.jsxs)(f.a,{className:"App",children:[Object(j.jsx)("br",{}),Object(j.jsx)("h1",{className:"App-intro",children:"In this challenge your goal is to create a to do list:"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"ability to accept a task from a user"}),Object(j.jsx)("li",{children:"ability to add this to the state"}),Object(j.jsx)("li",{children:"ability to display all of the tasks"}),Object(j.jsx)("li",{children:"ability to evaluated if a task was completed and update the state"})]}),Object(j.jsx)("hr",{}),Object(j.jsx)(T,{})]})},L=s(4),U=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)(h.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(L.c,{children:[Object(j.jsx)(L.a,{exact:!0,path:"/cats",component:v}),Object(j.jsx)(L.a,{exact:!0,path:"/search",component:D}),Object(j.jsx)(L.a,{exact:!0,path:"/dogs",component:k}),Object(j.jsx)(L.a,{exact:!0,path:"/todo",component:B})]})]})})};var H=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)(U,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s(41);a.a.render(Object(j.jsx)(H,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.1c799cf9.chunk.js.map