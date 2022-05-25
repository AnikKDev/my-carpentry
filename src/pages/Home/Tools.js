import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [allTools, setAllTools] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/tools')
            .then(function (response) {
                // handle success
                setAllTools(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);
    return (
        <div className="my-5">
            <h2 className="text-center text-4xl font-bold my-8 text-primary">TOOLS</h2>
            <div className="grid my-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-16">
                {
                    allTools.map(tool => <Tool tool={tool} key={tool._id}></Tool>).reverse().slice(0, 3)
                }
            </div>
        </div>
    );
};

export default Tools;