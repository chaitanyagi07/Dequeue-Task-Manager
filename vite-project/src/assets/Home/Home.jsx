import React,{useState} from "react"
import './home.css'
import Home_Page from './journal-man-increasing-his-productivity-at-work.png'
import { useNavigate } from "react-router-dom"

export const Home=()=>{
    const navigate=useNavigate();
    return(
        <>
        <div class="container">
        <div class="navbar">
            <div class="logo">DEQUEUE</div>
            <div class="list">
                <li class="p">Product</li>
                <li class="p">Download</li>
                <li class="p">Resources</li>
                <li class="p" onClick={()=>navigate("/Login")}>Login</li>
            </div>
        </div>
        <div class="details">
            <div class="containt">
                <h1>Your all-in-one</h1>
                <h1>collaborative workspace.</h1>
                <p>Dequeue brings teams and tools together for a more organized work day.</p>
                <div class="btns">
                    <button class="btn btn1" >Get DEQUEUE free</button>
                    <button class="btn btn2" >Contact Sales</button>
                </div>
            </div>
            <div class="imgs">
                <img src={Home_Page} alt="Project_Docs"></img>
            </div>
        </div>
        <div class="cards">
            <div class="card1 card">
                <h1>Event's <span Style="color: rgb(240, 240, 9);">Creator</span></h1>
                <p>Organize all your calendar events at one place.</p>
            </div>
            <div class="card2 card"  onClick={()=>navigate('/ManageProjects')}>
                <h1><span Style="color: rgb(240, 240, 9);">Manage</span> Projects</h1>
                <p>Manage Complex projects without the chaos.</p>
            </div>
            <div class="card1 card" onClick={()=>navigate('/TaskAndProject')}>
                <h1><span Style="color: rgb(240, 240, 9);">Tasks &</span> Projects</h1>
                <p>Manage Complex projects without the chaos.</p>
            </div>
            <div class="card1 card "  onClick={()=>navigate('/TaskAndList')}>
                <h1>Tasks & <span Style="color: rgb(240, 240, 9);">Lists</span></h1>
                <p>Easily manage your tasks and list using cards.</p>
            </div>
        </div>
    </div>
        </>
    )

}