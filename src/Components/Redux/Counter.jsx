import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
    decreaseByAmount,
} from "./counterSlice";

const Counter = () => {
    const [add, setAddAmount] = useState(0); // State to store the amount to add
    const [minus, setMinusAmount] = useState(0); // State to store the amount to subtract
    const count = useSelector((state) => state.counter.value); // Access counter value from Redux store
    const dispatch = useDispatch();

    // Increment by 1
    function addCount() {
        if (count < 10) {
            dispatch(increment());
        } else {
            alert("Count reached maximum clicks!");
        }
    }

    // Decrement by 1
    function minusCount() {
        if (count > 0) {
            dispatch(decrement());
        } else {
            alert("Count cannot be a negative number");
        }
    }

    // Reset count
    function resetCount() {
        dispatch(reset());
    }

    // Increment by the entered amount
    function increaseByAmount() {
        const addValue = Number(add) || 0; // Convert input to number
        dispatch(incrementByAmount(addValue)); // Dispatch action with the value
    }

    // Decrease by the entered amount
    function decreaseByAmountHandler() {
        const subValue = Number(minus) || 0; // Convert input to number
        dispatch(decreaseByAmount(subValue)); // Dispatch action with the value
    }

    // Reset the state of the amount inputs
    function resetState() {
        setAddAmount(0);
        setMinusAmount(0);
        dispatch(reset());
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="max-w-lg p-8 pt-20 shadow-lg bg-slate-800 rounded-3xl">
                <div className="p-6 text-center rounded-3xl">
                    <h1 className="mb-6 text-4xl font-bold text-white">Count: {count}</h1>
                    <div className="flex justify-center space-x-4">
                        <button
                            className="p-3 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                            onClick={addCount}
                        >
                            + Increment
                        </button>
                        <button
                            className="p-3 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                            onClick={minusCount}
                        >
                            - Decrement
                        </button>
                        <button
                            className="p-3 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                            onClick={resetCount}
                        >
                            Reset
                        </button>
                    </div>
                </div>

                <div className="mt-8 space-y-6 text-center">
                    <div>
                        <input
                            className="w-40 p-2 text-center text-black bg-white border-2 border-black rounded-md focus:outline-none"
                            type="number"
                            value={add}
                            onChange={(e) => setAddAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                        <button
                            className="p-3 ml-4 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                            onClick={increaseByAmount}
                        >
                            Add By Amount
                        </button>
                    </div>

                    <div>
                        <input
                            className="w-40 p-2 text-center text-black bg-white border-2 border-black rounded-md focus:outline-none"
                            type="number"
                            value={minus}
                            onChange={(e) => setMinusAmount(e.target.value)}
                            placeholder="Enter amount"
                        />
                        <button
                            className="p-3 ml-4 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                            onClick={decreaseByAmountHandler}
                        >
                            Minus By Amount
                        </button>
                    </div>

                    <button
                        className="p-3 mt-4 text-white transition duration-300 ease-in-out rounded-full shadow-lg bg-slate-500 hover:bg-blue-800"
                        onClick={resetState}
                    >
                        Reset State
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
