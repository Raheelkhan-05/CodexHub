import React from 'react'
import contest from "./Images/contest.jpg";
import practice from "./Images/practice.png";
import news from "./Images/news.webp";

export default function Coding(props) {
    return (
        <section className='popupanim'>
            <div className="res-container container m-0 ">
            <h2 className='heading text-center' style={{ color: 'white', fontSize: "50px", textShadow: "1px 1px 10px rgba(255,255,255,0.4)" }}><u>Our Services</u></h2>
                <div className="row my-5 mt-3" style={{ color: props.mode === "dark" ? "black" : "black" }}>

                    <div className="card1 col-12 col-lg-4 text-center mx-5 bg-light" style={{ borderRadius: "10px" }}>
                        <img src={contest} className="card1-img" alt="" />
                        <a href="/contest">
                            <div class="card1-body" style={{ color: "white", backgroundColor: "white" }}>
                                <i class="icon fa fa-globe m-auto mb-2 mt-3" style={{color:"black", boxShadow:"0px 0px 5px white"}}></i>
                                <h2 className="card1-title">Contests</h2>
                                <p className='w-100 card1-text my-4'>Coding contests foster skill development, creativity, and collaboration among programmers.</p>
                            </div>
                        </a>
                    </div>
                    <div className="card1 col-12 col-lg-4 text-center mx-5" style={{ borderRadius: "10px", backgroundColor:"black" }}>
                        <img src={practice} className="card1-img" alt="" />
                        <a href="/practice">
                            <div class="card1-body" style={{ color: "white", backgroundColor: "white" }}>
                                <i className="icon fa fa-solid fa-code m-auto mb-2 mt-3" style={{color:"black", boxShadow:"0px 0px 5px white"}}></i>
                                <h2 className="card1-title sub-heading">Practice</h2>
                                <p className='w-100 card1-text my-4 text-justify'>Coding practice: mastery, problem-solving, adaptability, knowledge reinforcement, continuous learning.</p>

                            </div>
                        </a>
                    </div>
                    <div className="card1 col-12 col-lg-4 text-center mx-5" style={{ borderRadius: "10px", backgroundColor:"rgb(0,40,85)" }}>
                        <img src={news} className="card1-img" alt="" />
                        <a href="/technews">
                            <div class="card1-body" style={{ color: "white", backgroundColor: "white" }}>
                                <i class="icon fa fa-newspaper-o m-auto mb-2 mt-3" style={{color:"black", boxShadow:"0px 0px 5px white"}}></i>
                                <h2 className="card1-title">Tech News</h2>
                                <p className='w-100 card1-text my-4'>Tech innovations shape daily life, from AI advancements to sustainable energy.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
