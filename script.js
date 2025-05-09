// Structure: trimester > course > files
const materials = {
    "Spring 2024": {
      "Object Oriented Programming": [
            {name: "Slide", url: "https://drive.google.com/drive/folders/1JRWJXjjL2kpWFH8VG2NFxOVp5yMf67FC"},
            {name: "Mid Questions", url: "https://drive.google.com/drive/folders/1gEuldYPKOAeUj32fHjpn9xoQebcz50K2"},
            {name: "Mid solution", url: "https://github.com/Imon739/Object-Oriented-Programming_Mid_solve"},
            {name: "Final Questions", url: "https://drive.google.com/drive/folders/1Wh3540utrXset7kgNRQkCBdlFMLQFqjq"},
            {name: "Final solution", url: "https://github.com/Imon739/Object-Oriented-Programming_Final_Solve"},
            {name: "Practice Problems", url: "https://drive.google.com/drive/folders/1Rbnfy-zhAzesSW_9EZvnjbFfycMMoV-Q"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/14aw_eOQsLf-hgDPNGnE1vLwWUhxVHdOG"},
	          {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1EjAmeZGigHmiIW8LJVJKeS40yXOa0lA6"}
      ],
      "Object Oriented Programming Lab": [
            {name: "Assignments", url: "https://github.com/Imon739/Object-Oriented-Programming-Assignment"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/11uA43YuIYGlTsQQM9VFY3OO6vZE2x0ju"},
            {name: "Mid & Final Questions", url: "https://drive.google.com/drive/folders/1Ra4dEmLocHWeCYT1ZIpZKuKbBW9WmkPc"},
            {name: "Mid solution", url: "https://github.com/Imon739/Object-Oriented-Programming_Mid_solve/tree/main/Lab%20Mid%20Solve"},
            {name: "Final solution", url: "https://github.com/Imon739/Object-Oriented-Programming_Final_Solve/tree/main/Lab%20Final%20solve"},
            {name: "Practice Problem Solution", url: "https://github.com/Imon739/Object-Oriented-Programming-Assignment/tree/main/Practice%20Problem%20solve"}
      ],
      "Electrical Circuits":[
            {name: "Assignments", url: "https://drive.google.com/drive/folders/1hm7DPQEZcekBAlgvRXiM3XxxRfOaaD6L"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1wrMo5bwDYZH6RHumpbXfK-P_gHbnyEQ9"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/1Ce7lcSuQg0slXlxNlriOS1Dn1OVIOXR2"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1oCvqncB4Bsav9uMWpeHSzE3mmKXYwJ2G"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1TTOafwnI0CTDZ8GH-AhGIuf95pe9ZrNZ"},
	          {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1AHeUoFO8TyXVjuE3ztbNUNUY8aqPWHHr"}
      ],
      "Industrial Management":[
            {name: "Assignments", url: "https://drive.google.com/drive/folders/1nTUOC_0hdDSCxLlo1Q0GmfTOH4E0gicF"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1vrpvjWioVq3a1hKDLLosMlOql7X-OALv"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/19MwP9NQvGPeLE7sKnhSygWVgIJx-JtRQ"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1EDjZnvNBIdcgBqQzqAs-n8FJj_6ZVuYd"},
            {name: "Practice Problems", url: "https://drive.google.com/drive/folders/1Cx8mG1aZSQuKuqiDU1ihms06kEosgaf5"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1OdF4OhF7HReVbWl-68CLBLVUNgd326gT"},
	          {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1p85DBnGAyp7R7MBhAexk4TBmc8DzA9F-"}
      ]
    },
    "Summer 2024": {
      "Computer Architecture": [
            {name: "Assignments", url: "https://drive.google.com/drive/folders/1Eo61ez32CIiQvDlP5ndFwjjuyRBx-8p-"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1eR4BTOVT2G3B6elQ3fA2lfc5KgzbFtFs"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/1ub4XCQWW6yY2Yb60wb1w3Zqt9wGGS_eo"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1d5wYe2RqrVg9fCM8emKNxCVF4VS9bM2b"},
            {name: "Necessary Books",url: "https://drive.google.com/drive/folders/1nmfed5D0GD8vNVpSg0emvSU0AKsdo6pr"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1Zf9taO8zsKNfl9CjT15XJcazrR8BKK_C"}
      ],
      "Data Structure and Algorithms I": [
            {name: "Assignments", url: "https://github.com/Imon739/DSA_Assignment"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1kP7RMrgfW055MexPeH7SNeNq3JUUQrm1"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/16BoggitOBx8Srqm58tRrxDDGQ37_w0sS"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1tI7ot0xT1pHebYQ-Cd3PwD3KRqXy2xoX"},
            {name: "Hand Note", url: "https://drive.google.com/drive/folders/1V_JG-TnbpTXhvCVIbdfPGPRv6Zu-HVjI"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1JrwyVtgO6bNHw9W9YarXQrfbsW6lVtYG"},
            {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1FbQELbTPKu-FgX33qZIZKdWpgQcNj-Kh"},
            {name: "Practice Problems", url: "https://drive.google.com/drive/folders/181Eji8_Mybik6bmKnr4joZcI_qcTZkUz"}
      ],
      "Theory of Computation":[
            {name: "Assignments", url: "https://drive.google.com/drive/folders/11rTpsOfuSlSzhGX0UOgmLqz74ojCgoJE"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1GHjSkJLOl4G2Fboe7lj7H-wza6o6KVRm"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/11XP4vVKKwRRjGwQt_AkFxmhibU4MyHlK"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1DFB-QdBJfiHdn_9pmYd_NvLi-75nBcyI"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1Q-8jBO_S_4ThQ1Jt_74gwlmk16LPFFpp"},
    	      {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1CKA7ZYYUi3Xmq-JHGluZ76izkO57LoWr"}
      ]
    },
    "Fall 2024": {
        "Probability and statistics":[
            { name: "Assignments", url: "http://drive.google.com/drive/folders/1q-Myp7udBH5A65-hKrwNa1sCtO6NlqlF"},
            { name: "Slide", url:"https://drive.google.com/drive/folders/1DGWz8aOmPmbomW0INIiOOfyuRlnaDlH0"},
            { name: "Mid materials", url: "https://drive.google.com/drive/folders/1vWGj8Hi-bFv-7ybeBdY1VxoZhtQ8DP-Q"},           
            { name: "Final materials", url: "https://drive.google.com/drive/folders/1ePBfH44WkuAgU6Q15yfHZxHCKyl2dT4A"},
            { name: "Hand note", url: "https://drive.google.com/drive/folders/1HVSHV_bRosrXFTaj8fkKevxls9EI7wol"},
            { name: "Quiz", url: "https://drive.google.com/drive/folders/1Uew-yLkBttCyFbahVCxXq1o85UXqtf7J"},
            { name: "Report", url: "https://drive.google.com/drive/folders/1IhlDM-kj8GbEWZLOc5cVWpn5u2VFyYSa"}
        ],
        "Data Structure and Algorithms II":[
            {name: "Assignments", url: "https://drive.google.com/drive/folders/1IWBmOY-qYgnJnyXQ6fTrHxEylfzRSngd"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1Lke2TA8ND7b7FOu9KVFpiDd_UTPqQ3_z"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/1MNHZMxHsVgKz2d6-s1fdIlEIaXXR8_Mo"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1_FMT20KHCUH11Gt21zq1Qq_caW61sbmr"},
            {name: "Hand Note", url: "https://drive.google.com/drive/folders/1VO_1-tyyGgmVcnaDtzDqP8apVOIBcR1A"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/1Q_uMLD4dSFHOsHob6zH-WhtXKt5nGgQo"}
        ],
        "Electronics":[
            {name: "Assignments", url: "https://drive.google.com/drive/folders/1xhEQ8PbjMdnqKeCDt4jb6VBW1FO539Va"},
            {name: "Slide", url: "https://drive.google.com/drive/folders/1-UsV_pfgBscP8K4RcWupzia3xeX8sSRT"},
            {name: "Mid materials", url: "https://drive.google.com/drive/folders/1aWo2cQTTl4NCvyi3X-XrX-6vEOD_5kDy"},
            {name: "Final materials", url: "https://drive.google.com/drive/folders/1vr_4_FcOrByOA34v5iyIvk5Uplsj9cs1"},
            {name: "Hand Note", url: "https://drive.google.com/drive/folders/1Qiz0WD0p1HPHYP3Gg2adJqJUNkabAtUP"},
            {name: "Quiz", url: "https://drive.google.com/drive/folders/16QAukU1jcPDQcp86uBDf1sy4W3Cz2Nu6"},
            {name: "Necessary Books", url: "https://drive.google.com/drive/folders/1K_uDdLJH0TjnE6TXX8OVk0cMmbxw8ypk"}
        ],
        "Electronics Lab":[
          {name: "Lab Report", url: "https://drive.google.com/drive/folders/1ya68Alry0HP15_sHGqBx9mJ-JEsiRtk3"}
        ]
    }
  };
  
  const container = document.getElementById("trimesterContainer");
  
  for (let trimester in materials) {
    const trimesterBtn = document.createElement("button");
    trimesterBtn.className = "button";
    trimesterBtn.textContent = trimester;
  
    const courseSection = document.createElement("div");
    courseSection.className = "section course";
    courseSection.style.display = "none";
  
    trimesterBtn.addEventListener("click", () => {
      courseSection.style.display = courseSection.style.display === "none" ? "block" : "none";
    });
  
    for (let course in materials[trimester]) {
      const courseBtn = document.createElement("button");
      courseBtn.className = "button";
      courseBtn.textContent = course;
  
      const folderDiv = document.createElement("div");
      folderDiv.className = "section folder";
      folderDiv.style.display = "none";
  
      courseBtn.addEventListener("click", () => {
        folderDiv.style.display = folderDiv.style.display === "none" ? "block" : "none";
      });
  
      materials[trimester][course].forEach(item => {
        const a = document.createElement("a");
        a.href = item.url;
        a.target = "_blank";
        a.textContent = item.name;
        folderDiv.appendChild(a);
        folderDiv.appendChild(document.createElement("br"));
      });
  
      courseSection.appendChild(courseBtn);
      courseSection.appendChild(folderDiv);
    }
  
    container.appendChild(trimesterBtn);
    container.appendChild(courseSection);
  }
  