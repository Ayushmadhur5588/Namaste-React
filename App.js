const head = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hello from h1 tag"),
React.createElement("h2",{},"hello from h2 tag")]
));

console.log(head);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);




// <h1 id:"heading"> Hello World From React </h1>

//<div id:"parent">
    //<div id:"child">
        //<h1>Hello from h1 tag</h1>
        //<h2>Hello from h2 tag</h2>
    //</div>
//</div>
