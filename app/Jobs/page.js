import Image from 'next/image';
import React from 'react';
import './page.css'

export default function Page() {
    return (
        <div>
            <div className="search-container">
                <div className="search-box">
                    <input type="text" placeholder="Name of the Company" />
                    <button><i className="fas fa-search">🔍</i></button>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Job Title" />
                    <button><i className="fas fa-search">🔍</i></button>
                </div>
                <div className="search-box">
                    <input type="text" placeholder="Location" />
                    <button><i className="fas fa-search">🔍</i></button>
                </div>
                <div className="toggle-switch">
                    <label>
                        <input type="checkbox" />
                        <span className="slider"></span>
                        Open Jobs Only
                    </label>
                </div>
            </div>
            <div className="job-listings">
                <div className="job-card">
                    <div className="job-title">
                        Head Enterprise Account Management <span>| A Funded Startup</span>
                    </div>
                    <div className="job-details">
                        <div className="detail">
                            <strong>Location</strong>
                            <p>Noida</p>
                        </div>
                        <div className="detail">
                            <strong>Deadline</strong>
                            <p>Sep 30, 2024</p>
                        </div>
                        <div className="detail">
                            <strong>Salary</strong>
                            <p>50 LPA</p>
                        </div>
                        <div className="detail">
                            <strong>Applicants</strong>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="job-footer">
                        <div className="posted-by">
                            <Image src="https://via.placeholder.com/40" alt="Mukesh Batra" width={40} height={40} />
                            <p>Mukesh Batra<br /><span>Published On Aug 30, 2024</span></p>
                        </div>
                        <div className="job-actions">
                            <span className="views">👁️ 4</span>
                            <button className="view-job">View Job Post</button>
                        </div>
                    </div>
                </div>
                <div className="job-card">
                    <div className="job-title">
                        Chief Business Officer <span>| A Funded Startup</span>
                    </div>
                    <div className="job-details">
                        <div className="detail">
                            <strong>Location</strong>
                            <p>Noida</p>
                        </div>
                        <div className="detail">
                            <strong>Deadline</strong>
                            <p>Sep 30, 2024</p>
                        </div>
                        <div className="detail">
                            <strong>Salary</strong>
                            <p>100 LPA</p>
                        </div>
                        <div className="detail">
                            <strong>Applicants</strong>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="job-footer">
                        <div className="posted-by">
                            <Image src="https://via.placeholder.com/40" alt="Mukesh Batra" width={40} height={40} />
                            <p>Mukesh Batra<br /><span>Published On Aug 30, 2024</span></p>
                        </div>
                        <div className="job-actions">
                            <span className="views">👁️ 1</span>
                            <button className="view-job">View Job Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
