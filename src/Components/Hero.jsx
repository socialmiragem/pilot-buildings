import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [selectedType, setSelectedType] = useState("fabric");
    const [fade, setFade] = useState(false);

    const handleTypeChange = (type) => {
        if (type === selectedType) return;

        setFade(true);
        setTimeout(() => {
            setSelectedType(type);
            setFade(false);
        }, 200);
    };

    const content = {
        fabric: {
            type: "Fabric",
            image: "./assets/images/image.svg",
            text: "Born from the Latin 'Magnus', meaning 'Great', the Magnum Series delivers unmatched height, heavy-duty strength, and serious snow-load resilience without the big price tag. engineered for big performance",
            list: [
                "Provide strength and size",
                "Tall clearances can withstand heavy snow loads",
                "Truss spacing optimized for efficiency and cost savings",
            ]
        },
        metal: {
            type: "Metal",
            image: "./assets/images/image.svg",
            text: "Born from the Latin 'Magnus', meaning 'Great', the Magnum Series delivers unmatched height, heavy-duty strength, and serious snow-load resilience without the big price tag. engineered for big performance",
            list: [
                "Provide strength and size",
                "Tall clearances can withstand heavy snow loads",
                "Truss spacing optimized for efficiency and cost savings",
            ]
        }
    };
    const { type, text, list, image } = content[selectedType];

    return (
        <>
            <section id="hero">
                <div className="row h-100 m-0">
                    <div className="col-md-6 p-0 position-relative" style={{ height: "100vh" }}>
                        <div className="wrap h-100">
                            <img src="./assets/images/background/bg.png" alt="" className="img-fluid w-100 h-100" />
                        </div>
                        <div className="content">
                            <h2 className="inter opacity-50 lh-1">Find The</h2>
                            <h1 className="inter lh-1">Perfect </h1>
                            <h1 className="inter lh-1">Fit</h1>
                            <div className="hero_btn mt-md-5">
                                <Link to="/" className="btn btn-primary inter">Explore Advantages</Link>
                            </div>
                            <div className="secondary_content mt-md-5">
                                <h2 className="inter">For Your <br /> project</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 second_col d-flex align-items-center flex-column justify-content-center">
                        <div className="px-5 container">
                            <div className="items-list">
                                <ul className="prime">
                                    <li className={`${selectedType == "fabric" ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleTypeChange("fabric"); }}>Fabric</li>
                                    <li className={`${selectedType == "metal" ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleTypeChange("metal"); }}>Metal 1</li>
                                </ul>
                            </div>
                            <h2 className="inter">Building Types</h2>
                            <div className="d-flex gap-3 mt-4">
                                <div className="btn_fabric">
                                    <Link to="" className="fabric" onClick={(e) => { e.preventDefault(); handleTypeChange("fabric"); }}>
                                        Fabric
                                    </Link>
                                </div>
                                <div className="btn_metal">
                                    <Link to="" className="fabric" onClick={(e) => { e.preventDefault(); handleTypeChange("metal"); }}>
                                        Metal
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-5 d-flex flex-column align-items-center">
                                    <div className="wraper">
                                        <img src={image} alt="" className="img-fluid" />
                                    </div>
                                    <div className="btn_request d-md-flex d-none">
                                        <Link to="/" className="inter mx-auto">Project Request</Link>
                                    </div>
                                </div>
                                <div className="col-md-7 ps-3">
                                    <div
                                        className="desc"
                                        style={{
                                            opacity: fade ? 0 : 1,
                                            transform: fade ? "translateY(10px)" : "translateY(0)",
                                            transition: "opacity 0.3s ease, transform 0.3s ease"
                                        }}
                                    >
                                        <h2 className="prime">Type: <span>{type}</span></h2>
                                        <select
                                            id="form"
                                            className="form-select inter"
                                            value={selectedType}
                                            onChange={(e) => handleTypeChange(e.target.value)}
                                        >
                                            <option value="fabric">Fabric</option>
                                            <option value="metal">Metal</option>
                                        </select>
                                        <p className="inter">{text}</p>
                                        <h6 className="inter">Characteristics:</h6>
                                        <ol className="list-number">
                                            {list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ol>
                                        <div className="btn_request_2 d-md-none d-block">
                                            <Link to="/" className="inter mx-auto">Project Request</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
