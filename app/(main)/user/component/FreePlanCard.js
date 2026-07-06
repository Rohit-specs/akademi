"use client"
import { useState } from "react"
import { X, XLg } from "react-bootstrap-icons"

const FreePlanCard = () => {
  const [hide,setHide] = useState(false)
  return (
    <div className={`p-4 rounded-4 overflow-hidden plan-card mb-4 ${hide&&("d-none")}`} >
        <div className="d-flex justify-content-between mb-3">
            <div>
                <p className="text-light">Your Plan</p>
                <h3 className="page-title text-light">Free</h3>

            </div>
            <XLg onClick={()=>setHide(true)} className="text-light" role="button"/>
        </div>
        <ul className="text-light fw-medium mb-3">
          <li>50 GB Storage</li>
          <li>Limited Features</li>
        </ul>
        <small className="text-light mb-3 d-block">Upgrade to Premium Plan to get more Features & Storage memory </small>
        <button className="btn btn-light rounded-pill mb-3">Upgrade Plan</button>
    </div>
  )
}

export default FreePlanCard
