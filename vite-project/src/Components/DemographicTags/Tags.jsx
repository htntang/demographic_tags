import React from 'react';
import FieldOfStudiesTags from './01_FieldOfStudies/Tags_Studies';
import CulturalIdentityTags from './02_CulturalIdentity/Tags_CulturalIdentity';
import MarginalizedClassesTags from './03_MarginalizedClasses/Tags_MarginalizedClasses';
import IndustryTags from './04_Industry/Tags_Industry';
import AthleticsTags from './05_Athletics/Tags_Athletics';
import StudentTypeTags from './06_StudentType/Tags_StudentType';
import ValueTags from './07_Value/Tags_Value';
import RequirementsTags from './08_AcademicRequirements/Tags_Requirements';
import MiscellaneousTags from './09_Miscellaneous/Tags_Misc';
import DisimbursementScheduleTags from './10_Disimbursement.jsx/Tags_Disimbursement';
import './Tags.css';

const DemographicTags = () =>{
    return(
        <div className="demographictags">
            <header className="demographictags">
                <h1>Demographic Tags</h1>
                <h3><i>Choose all that apply to you.</i></h3>
            </header>

            {/* Gender Identity: Male, Female, Transgender Male, Transgender Female, Non-Binary, Genderqueer, Agender, Two-Spirit, Prefer not to say, Other */}

            <div className="tags">
                <div className="grid-container">

                    <div className="grid-item">
                        <FieldOfStudiesTags />
                    </div>

                    <div className="grid-item">
                        <CulturalIdentityTags />
                    </div>

                    <div className="grid-item">
                        <MarginalizedClassesTags />
                    </div>

                    <div className="grid-item">
                        <IndustryTags />
                    </div>

                    <div className="grid-item">
                        <AthleticsTags />
                    </div>

                    <div className="grid-item">
                        <StudentTypeTags />
                    </div>

                    <div className="grid-item">
                        <ValueTags />
                    </div>

                    <div className="grid-item">
                        <RequirementsTags />
                    </div>

                    <div className="grid-item">
                        <MiscellaneousTags />
                    </div>

                    <div className="grid-item">
                        <DisimbursementScheduleTags />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default DemographicTags;