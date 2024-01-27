import React from "react";
import  ReactDOM  from "react-dom/client";
import Form from "./Form";

class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <Form>
                    function welcomedo(params) {
                        document.write("hello world")
                    };
                </Form>
            </React.Fragment>
        )
    }
}
var element= document.getElementById("root");
ReactDOM.createRoot(element).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);