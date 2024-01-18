

let jsonData;
// while (!jsonData)
//   {
//   fetch('https://randomuser.me/api/', { method: 'GET' })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Process the data as needed
    
//     jsonData = data;
//     // console.log(jsonData);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   }); 
//   }

document.addEventListener('DOMContentLoaded', function() {

  
  console.log(jsonData);

  if(jsonData)
  {
  
  // // JSON data
    // jsonData = {
        
    //     "results": [
    //         {
    //           "gender": "Female",
    //           "name": {
    //             "title": "Miss",
    //             "first": "Nurdan",
    //             "last": "Günday"
    //           },
    //           "location": {
    //             "street": {
    //               "number": 5913,
    //               "name": "Kushimoto Sk"
    //             },
    //             "city": "Manisa",
    //             "state": "Yozgat",
    //             "country": "Turkey",
    //             "postcode": 78008,
    //             "coordinates": {
    //               "latitude": "71.9630",
    //               "longitude": "154.9061"
    //             },
    //             "timezone": {
    //               "offset": "+3:30",
    //               "description": "Tehran"
    //             }
    //           },
    //           "email": "nurdan.gunday@example.com",
    //           "login": {
    //             "uuid": "b609938d-c799-424b-b4b6-983e68e20a1f",
    //             "username": "happymeercat586",
    //             "password": "post",
    //             "salt": "CMKlqRor",
    //             "md5": "7efd52e14885587e82df8a7ec10a4e9f",
    //             "sha1": "2cec93899148776e6512d4b3f161863dc7fe52f0",
    //             "sha256": "93f9b6e2c55d4ebb4bc3297bece3503653c2203ab875ab5cf619ecab95d3097a"
    //           },
    //           "dob": {
    //             "date": "1957-08-04T07:06:45.979Z",
    //             "age": 66
    //           },
    //           "registered": {
    //             "date": "2020-12-03T05:18:42.608Z",
    //             "age": 3
    //           },
    //           "phone": "(591)-060-9077",
    //           "cell": "(324)-040-1371",
    //           "id": {
    //             "name": "",
    //             "value": null
    //           },
    //           "picture": {
    //             "large": "https://randomuser.me/api/portraits/women/36.jpg",
    //             "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
    //             "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
    //           },
    //           "nat": "TR"
    //         }
    //       ],
    //       "info": {
    //         "seed": "624223d933c2433b",
    //         "results": 1,
    //         "page": 1,
    //         "version": "1.4"
    //       }
          
    // };
    // console.log(jsonData);


  
    // Function to create user profile HTML
    function createUserProfile(user) {
      const userProfile = document.querySelector('#userProfile');
      // userProfile.innerHTML = `
      //   <img src="${user.picture.large}" style= "justify-content: center; align-items: center; display: flex" alt="User Profile Picture" class="profile-picture">
      //   <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
      // `;
      // userProfile.classList.add('');
      const img_profile = document.createElement('img');
      img_profile.src = user.picture.large;
      img_profile.style.borderRadius = "50%";
      img_profile.style.border = "3px solid #333";
      const pre_name_text = document.createElement('p');
      pre_name_text.textContent = "Hi! My name is";
      pre_name_text.style.marginBottom = "0px";
      pre_name_text.style.color = "gray";
      const name_text = document.createElement('h1');
      name_text.textContent = user.name.first + " " + user.name.last;
      name_text.style.marginTop = '5px';
      name_text.style.fontWeight = "lighter";


      userProfile.appendChild(img_profile);
      userProfile.appendChild(pre_name_text);
      userProfile.appendChild(name_text);
    }
    function createDisplayBox()
    {
        const body = document.querySelector('#userProfile');
        const box = document.createElement('div');
        box.id = "displayBox";
        box.style.justifyContent = "center"
        box.style.height = '20px';
        box.style.paddingTop = '15px';
        box.style.paddingBottom = '10px';
        box.style.borderRadius = '8px';
        const box_content = document.createElement('p');
        box_content.textContent = '';
        
        
        box.appendChild(box_content);
        body.appendChild(box);
    }

    function createIconBoxes() {
        const body = document.querySelector('#userProfile');
        const div_list_of_info = document.createElement('div');
        div_list_of_info.id = "listOfInfo";
        
        for(let i = 0; i<4; i++)
        {
            const temp_icon_list_item = document.createElement('p');
            temp_icon_list_item.id = 'section' + i;
            temp_icon_list_item.style.padding = "15px";
            temp_icon_list_item.style.width = '70px';
            temp_icon_list_item.style.margin = '5px';
            temp_icon_list_item.style.backgroundColor = '#f8f0e3';
            temp_icon_list_item.style.borderRadius = '12px';
            temp_icon_list_item.style.textAlign = 'center';
            
            
            if (i == 0)
            {
                temp_icon_list_item.textContent = 'Gender';
            }
            else if (i == 1)
            {
                temp_icon_list_item.textContent = 'Email';
            }
            else if (i == 2)
            {
                temp_icon_list_item.textContent = 'Location';
            }
            else if (i == 3)
            {
                temp_icon_list_item.textContent = 'Phone';
            }
            temp_icon_list_item.style.color = 'black';
            div_list_of_info.appendChild(temp_icon_list_item);
        }

        div_list_of_info.style.display = 'flex';
        div_list_of_info.style.justifyContent = 'space-evenly';
        div_list_of_info.style.flexDirection = 'row';
        div_list_of_info.style.margin = '15px';
        
        body.appendChild(div_list_of_info);

    }

  
    // Call the function with the first user from the JSON data
    createUserProfile(jsonData.results[0]);
    createIconBoxes();
    createDisplayBox();
    const test = document.querySelector("#userProfile");
    const test_2 = document.createElement('div');
    test_2.id = "arrowBounce";
    test.appendChild(test_2);
    const display_box_text = document.querySelector('#displayBox');
    const original_text = display_box_text.textContent;
    const icon_box_list = document.querySelectorAll('#listOfInfo p');
    // console.log(icon_box_list);
    const gender_ = document.querySelector('#section0');
    const gender_updatedtext = jsonData.results[0].gender;

    let flex_index = 0;

    gender_.addEventListener("mouseover", function(){
        display_box_text.textContent = gender_updatedtext;
        display_box_text.classList.add('smooth-transition');
        icon_box_list[0].style.backgroundColor = '#e8e0d3';
        icon_box_list[0].classList.add('bounce');
        // test_2.classList.add('arrow');
        // test_2.classList.add('bounce');
    });
    gender_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
        display_box_text.classList.remove('smooth-transition');
        icon_box_list[0].style.backgroundColor = '#f8f0e3';
        icon_box_list[0].classList.remove('bounce');
    });

    const email_ = document.querySelector('#section1');
    const email_updatedtext = jsonData.results[0].email;
    email_.addEventListener("mouseover", function(){
        display_box_text.textContent = email_updatedtext;
        display_box_text.classList.add('smooth-transition');
        icon_box_list[1].style.backgroundColor = '#e8e0d3';
        icon_box_list[1].classList.add('bounce');
    });
    email_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
        display_box_text.classList.remove('smooth-transition');
        icon_box_list[1].style.backgroundColor = '#f8f0e3';
        icon_box_list[1].classList.remove('bounce');
    });

    const location_ = document.querySelector('#section2');
    const location_updatedtext = jsonData.results[0].location.city + ", " + jsonData.results[0].location.state + ", "+ jsonData.results[0].location.country;
    location_.addEventListener("mouseover", function(){
        display_box_text.textContent = location_updatedtext;
        display_box_text.classList.add('smooth-transition');
        icon_box_list[2].style.backgroundColor = '#e8e0d3';
        icon_box_list[2].classList.add('bounce');
    });
    location_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
        display_box_text.classList.remove('smooth-transition');
        icon_box_list[2].style.backgroundColor = '#f8f0e3';
        icon_box_list[2].classList.remove('bounce');
    });

    const phone_ = document.querySelector('#section3');
    const phone_updatedtext = jsonData.results[0].phone;
    phone_.addEventListener("mouseover", function(){
        display_box_text.textContent = phone_updatedtext;
        display_box_text.classList.add('smooth-transition');
        icon_box_list[3].style.backgroundColor = '#e8e0d3';
        icon_box_list[3].classList.add('bounce');
    });
    phone_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
        display_box_text.classList.remove('smooth-transition');
        icon_box_list[3].style.backgroundColor = '#f8f0e3';
        icon_box_list[3].classList.remove('bounce');
    });

  }
  });
  

