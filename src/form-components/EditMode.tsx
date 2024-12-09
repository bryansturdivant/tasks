import React, { useState } from "react";

export function EditMode(): React.JSX.Element {

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEditing(event.target.checked);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleStudentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(event.target.checked);
    };



    return (
        <div>
            <h3>{isEditing ? "Edit Mode" : "View Mode"}</h3>
            <label>
                Edit Mode:
                <input
                type = "checkbox"
                checked={isEditing}
                onChange={handleSwitchChange}
                />
            </label>
            {isEditing ? (
                <div>
                    <input
                    type="text"
                    value={userName}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    />
                    <label>
                        <input
                        type="checkbox"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                    Are you a student?
                    </label>
                </div>
            ) : (
                <p>
                    {userName} is {isStudent ? "a student" : "not a student"}.
                </p>
            )}
        </div>
    );
}
