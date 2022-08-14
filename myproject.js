let myProject=[]
function submitData(event) {
    event.preventDefault()
    //event.preventDefault ini agar saat kita post blog, tidak me refresh lagi

    let projectName=document.getElementById("input-project-name").value
    let startDate=document.getElementById("input-start-date").value
    let endDate=document.getElementById("input-end-date").value
    let description=document.getElementById("input-description").value
    let technologiesJavascript=document.getElementById("input-technologies-js").checked
    let technologiesPhp=document.getElementById("input-technologies-php").checked
    let technologiesReactjs=document.getElementById("input-technologies-react").checked
    let technologiesNodejs=document.getElementById("input-technologies-node-js").checked
    let uploadImage=document.getElementById("input-image").files
    let peringatan="Semua kolom wajib diisi"
    let resultDate=(startDate + endDate)

    if (projectName == "") {
        return alert(peringatan)        
    } else if (startDate == "") {
        return alert(peringatan)
    } else if (endDate == "") {
        return alert(peringatan)
    }

    if (technologiesJavascript) {
        technologiesJavascript=document.getElementById("input-technologies-js").value
    } else {}

    if (technologiesPhp) {
        technologiesPhp=document.getElementById("input-technologies-php").value
    } else {}

    if (technologiesReactjs) {
        technologiesReactjs=document.getElementById("input-technologies-react").value
    } else {}

    if (technologiesNodejs) {
        technologiesNodejs=document.getElementById("input-technologies-node-js").value
    } else {}

    console.log(technologiesJavascript)
    console.log(technologiesPhp)
    console.log(technologiesReactjs)
    console.log(technologiesNodejs)

    uploadImage=URL.createObjectURL(uploadImage[0])
    
    let project = {
        projectName,
        resultDate,
        description,
        technologiesJavascript,
        technologiesPhp,
        technologiesReactjs,
        technologiesNodejs,
        uploadImage,
    }

    myProject.push(project)

    console.log(myProject);

    renderBlog()

}

function renderBlog () {

    document.getElementById("blog").innerHTML = "" 

    for(let index=0; index < myProject.length; index++) {
        console.log(myProject[index])
        document.getElementById("blog").innerHTML += 
        `
                <div class="blog-detail-satu">
                    <div class="blog-detail-container-satu">
                        <div style="width: 100%; height: 300px; overflow: hidden; position: relative;">
                            <img src="${myProject[index].uploadImage}" style="max-width: 100%; position: absolute;">
                        </div>
                        <p id="input-project-name" style="margin-top: 10px; margin-left: 10px; margin-bottom: 5px; font-size: 35px; font-family: 'Segoe UI'; font-weight: bold;">${myProject[index].projectName}</p>
                        <div class="author" style="margin-top: 2px; margin-left: 13px; margin-bottom: 5px; color: grey">Durasi : 3 bulan</div>
                        <p style="
                            margin-top: 25px; margin-left: 13px; margin-right: 50px; text-align: justify; font-size: 18px; font-family: 'Segoe UI';">
                            <b>ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ</b><br/>
                            <br/>
                            ${myProject[index].description}
                        </p>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesJavascript}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesPhp}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesReactjs}" ></i></span>
                        <span><i style="margin-left: 13px; margin-top: 20px; margin-left: 20px; font-size: 30px;" class="fa-brands ${myProject[index].technologiesNodejs}" ></i></span>
                        <div class="edit-dan-delete">
                            <div class="edit-satu">
                            <a href="myproject-detail.html" title="edit">
                            <button>edit</button>
                            </a>
                            </div>
                            <div class="edit-dua">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}