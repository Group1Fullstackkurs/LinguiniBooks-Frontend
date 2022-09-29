import "./EditProfile.css";
import { useState, useEffect } from "react";
import React from 'react';

const EditProfile = ({open, onClose}) => {
    interface ProfileProps{
        open: boolean;
        onClose: () => void;
    }
    
    if (!open) return null
    return (
        <div className="overlay">
            <div className="editContainer">
                <div className="content">
                    <button onClick={onClose} className="closeButton">    
                </button></div>
                
            </div>
        </div>
    
  )
}

export default EditProfile

 