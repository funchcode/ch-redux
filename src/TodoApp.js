import React from 'react';
import {createGlobalStyle} from "styled-components";
import TodoTemplate from "./tutorials/components/TodoTemplate";
import TodoHead from "./tutorials/components/TodoHead";
import TodoList from "./tutorials/components/TodoList";
import TodoCreate from "./tutorials/components/TodoCreate";
import {TodoProvider} from "./tutorials/components/TodoContext";

const GlobalStyle = createGlobalStyle`
    body {
        background: #e0ecef;
    }
`;

function App() {
    return (
        <TodoProvider>
            <GlobalStyle />
            <TodoTemplate>
                    <TodoHead/>
                    <TodoList/>
                    <TodoCreate/>
            </TodoTemplate>
        </TodoProvider>
    );
}

export default App;
