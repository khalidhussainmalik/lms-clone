import React from 'react'
import "./CourseSyllabus.css";

function CourseSyllabus() {
  return (
    <>
    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      SEASON 01 | INTRODUCTION TO PROGRAMMING
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      <h4>Duration: 1 Week</h4>
            <ul className="list-css">
                <li><i class="fa fa-check"></i>Inspiration of Dart Programming</li>
                <li><i class="fa fa-check"></i>Printing statments in Dart</li>
                <li><i class="fa fa-check"></i>Datatypes, Variable and Operation in Dart</li>
                <li><i class="fa fa-check"></i>Building a Grade/Percentage calculation application in Dart</li>
            </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      SEASON 02 | CONDITIONAL PROGRAMMING
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <h4>Duration: 2 Week</h4>
    <ul className="list-css">
        <li><i class="fa fa-check"></i>Conrol/ Conditional statements in Dart </li>
        <li><i class="fa fa-check"></i>Building a true/false Detection Application in Dart</li>
        <li><i class="fa fa-check"></i>Loops and its types in Dart</li>
        <li><i class="fa fa-check"></i>Building a login System Application in Dart</li>
    </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      SEASON 03 | FUNCTIONAL PROGRAMMING 
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default CourseSyllabus