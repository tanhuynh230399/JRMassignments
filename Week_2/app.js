document.addEventListener('DOMContentLoaded', function() {
    // JSON data
    const jsonData = {
        
        "results": [
            {
              "gender": "Female",
              "name": {
                "title": "Miss",
                "first": "Nurdan",
                "last": "Günday"
              },
              "location": {
                "street": {
                  "number": 5913,
                  "name": "Kushimoto Sk"
                },
                "city": "Manisa",
                "state": "Yozgat",
                "country": "Turkey",
                "postcode": 78008,
                "coordinates": {
                  "latitude": "71.9630",
                  "longitude": "154.9061"
                },
                "timezone": {
                  "offset": "+3:30",
                  "description": "Tehran"
                }
              },
              "email": "nurdan.gunday@example.com",
              "login": {
                "uuid": "b609938d-c799-424b-b4b6-983e68e20a1f",
                "username": "happymeercat586",
                "password": "post",
                "salt": "CMKlqRor",
                "md5": "7efd52e14885587e82df8a7ec10a4e9f",
                "sha1": "2cec93899148776e6512d4b3f161863dc7fe52f0",
                "sha256": "93f9b6e2c55d4ebb4bc3297bece3503653c2203ab875ab5cf619ecab95d3097a"
              },
              "dob": {
                "date": "1957-08-04T07:06:45.979Z",
                "age": 66
              },
              "registered": {
                "date": "2020-12-03T05:18:42.608Z",
                "age": 3
              },
              "phone": "(591)-060-9077",
              "cell": "(324)-040-1371",
              "id": {
                "name": "",
                "value": null
              },
              "picture": {
                "large": "https://randomuser.me/api/portraits/women/36.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
              },
              "nat": "TR"
            }
          ],
          "info": {
            "seed": "624223d933c2433b",
            "results": 1,
            "page": 1,
            "version": "1.4"
          }
          
    };
  
    // Function to create user profile HTML
    function createUserProfile(user) {
      const userProfile = document.querySelector('#userProfile');
      userProfile.innerHTML = `
        <img src="${user.picture.large}" style= "justify-content: center; align-items: center; display: flex" alt="User Profile Picture" class="profile-picture">
        <h1>${user.name.title} ${user.name.first} ${user.name.last}</h1>
      `;
    }
    function createDisplayBox()
    {
        const body = document.querySelector('#userProfile');
        const box = document.createElement('div');
        box.id = "displayBox";
        box.style.justifyContent = "center"
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
        div_list_of_info.style.justifyContent = 'space-between';
        div_list_of_info.style.flexDirection = 'row';
        body.appendChild(div_list_of_info);

    }


  
    // Call the function with the first user from the JSON data
    createUserProfile(jsonData.results[0]);
    createIconBoxes();
    createDisplayBox();

    const display_box_text = document.querySelector('#displayBox');
    const original_text = display_box_text.textContent;

    const gender_ = document.querySelector('#section0');
    const gender_updatedtext = jsonData.results[0].gender;
    gender_.addEventListener("mouseover", function(){
        display_box_text.textContent = gender_updatedtext;
    });
    gender_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
    });

    const email_ = document.querySelector('#section1');
    const email_updatedtext = jsonData.results[0].email;
    email_.addEventListener("mouseover", function(){
        display_box_text.textContent = email_updatedtext;
    });
    email_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
    });

    const location_ = document.querySelector('#section2');
    const location_updatedtext = jsonData.results[0].location.city + ", " + jsonData.results[0].location.state + ", "+ jsonData.results[0].location.country;
    location_.addEventListener("mouseover", function(){
        display_box_text.textContent = location_updatedtext;
    });
    location_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
    });

    const phone_ = document.querySelector('#section3');
    const phone_updatedtext = jsonData.results[0].phone;
    phone_.addEventListener("mouseover", function(){
        display_box_text.textContent = phone_updatedtext;
    });
    phone_.addEventListener("mouseout", function(){
        display_box_text.textContent = original_text;
    });


  });
  