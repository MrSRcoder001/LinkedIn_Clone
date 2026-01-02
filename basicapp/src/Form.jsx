import { useState } from "react";

export default function Form() {
    let [Formdata, setFormdata] = useState({
        fullname: "",
        ClassInfo: "",
        address:"",
        skill:"",
        project:""

    });

    // Handles input changes
    let handleChange = (event) => {
        let { name, value } = event.target;

        setFormdata((currData) => ({
            ...currData,
            [name]: value
        }));
    };

    // Handles form submission
    let HandleOnsubmit = (event) => {
        event.preventDefault();
        console.log(Formdata);

        // Reset form
        setFormdata({
             fullname: "",
        ClassInfo: "",
        address:"",
        skill:"",
        project:""
        });
    };

    return (
        <div>
            <hr />
            <h1>Basic Info Form</h1>
            <form onSubmit={HandleOnsubmit}>
                <label htmlFor="fullname">Enter your FullName </label>
                <input
                    onChange={handleChange}
                    name="fullname"
                    id="fullname"
                    value={Formdata.fullname}
                    placeholder="Enter your FullName"
                />
                <br /><br />

                <label htmlFor="class">Enter your Address </label>
                <input
                    onChange={handleChange}
                    name="address"
                    id="class"
                    value={Formdata.address}
                    placeholder="Enter your Address"
                />
                <br /><br />
                <label htmlFor="class">Enter your Skill </label>
                <input
                    onChange={handleChange}
                    name="skill"
                    id="class"
                    value={Formdata.skill}
                    placeholder="Enter your skill"
                />
\                <br /><br />

                <label htmlFor="class">Enter your Project Name </label>
                <input
                    onChange={handleChange}
                    name="project"
                    id="class"
                    value={Formdata.project}
                    placeholder="Enter your Class"
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
            <hr />
        </div>
    );
}
