import React from 'react'
import { Link } from "react-router-dom";
import VerticalDataIndicator from "./VerticalDataIndicator";
import { useState } from 'react';
import { BuildingTypesContent } from '../../public/assets/data/data';
const BuildingTypes = ({ currentSection, scrollToSection }) => {
    const [selectedType, setSelectedType] = useState("Magnum");
    const [fade, setFade] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState("Fabric");

    const handleTypeChange = (type) => {
        if (type === selectedType) return;

        setFade(true);
        setTimeout(() => {
            setSelectedType(type);
            setFade(false);
        }, 200);
    };

    const handleMaterialChange = (material) => {
        setSelectedMaterial(material);
    };

    const { type, list } = BuildingTypesContent[selectedType];
    return (
        <>
            <section id="buildingTypes" className='position-relative'>
                <div className='d-md-block d-none'>
                    <VerticalDataIndicator
                        selectedType={selectedType}
                        onSelect={handleTypeChange}
                    />

                </div>
                <div className="row m-0">

                    <div className="col-md-12 second_col d-flex align-items-center flex-column justify-content-md-center justify-content-between position-relative h-100vh">
                        <div className="px-md-5 px-4 container">
                            <h2 className="font-inter fw-semibold">Building Types</h2>
                            <div className="d-flex gap-3 mt-4">
                                <div className="btn_fabric">
                                    <Link to="" className="fabric">
                                        Fabric
                                    </Link>
                                </div>
                                <div className="btn_metal">
                                    <Link to="" className="fabric">
                                        Metal
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-4 d-flex flex-column justify-content-around pt-0 ps-md-2 ps-0">
                                    <div className="wraper">
                                        <img src="./assets/images/image.svg" alt="" className="img-fluid" />
                                    </div>
                                    <div className="btn_request d-md-flex d-none">
                                        <Link to="/" className="font-inter mb-3">Project Request</Link>
                                    </div>
                                    <div className="selectMobile d-md-none d-block w-75">
                                        <VerticalDataIndicator selectedType={selectedType}
                                            onSelect={handleTypeChange} />
                                    </div>

                                </div>
                                <div className="col-md-8 p-0">
                                    <div
                                        className="desc"
                                        style={{
                                            opacity: fade ? 0 : 1,
                                            transform: fade ? "translateY(10px)" : "translateY(0)",
                                            transition: "opacity 0.3s ease, transform 0.3s ease"
                                        }}
                                    >
                                        <h2 className="font-prime">Type: <span>{type}</span></h2>
                                        <select
                                            className="form-select font-inter"
                                        >
                                            <option value="0">Type Usage</option>
                                            <option value="metal">Metal</option>
                                            <option value="fabric">Fabric</option>
                                        </select>
                                        <p className="font-inter description">Born from the Latin 'Magnus', meaning 'Great', the Magnum Series delivers unmatched height, heavy-duty strength, and serious snow-load resilience without the big price tag. engineered for big performance</p>
                                        <h6 className="font-inter">Characteristics:</h6>
                                        <ol className="list-number">
                                            {list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ol>
                                        <div className="btn_request_2">
                                            <Link to="/" className="font-inter mx-auto">Project Request</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuildingTypes

