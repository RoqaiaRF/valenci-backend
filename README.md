# valenci-backend


# Endpoint page 1: | معلومات المدين
 POST : /info

Request: 	body

    {
    "first_name" :"Roqaia",
     "second_name" :"bassam",
     "third_name" : "nahar",
     "last_name" : "alrfou",
     "national_id" : "9972040855",
     "type_doc": "id",
     "number_doc" : "1212",
     "nationality" : "jordainian",
     "gender" : "female",
     "phone" : "962799849386",
     "is_kafeel" : true,            
     "first_name_kafeel" : "hameed",
     "second_name_kafeel" : "gaith",
     "third_name_kafeel" : "zainab",
     "last_name_kafeel" : "mequass",
     "national_id_kafeel" : "65656546",
     "type_doc_kafeel" : "passprt",
     "number_doc_kafeel" : "25454",
     "nationality_kafeel" : "not jordainian",
     "gender_kafeel" : "male",
     "phone_kafeel" : "35463565"
    }

Response: ===>message = id = 3


    {
        "status": "successfully",
        "message": 3
    }



# Endpoint page 2: | عنوان المدين
 POST : /address

 Request: 	body

    {
        "id": 3,
        "province": "tafila",
        "region": "region",
        "street": "street",
        "landmark": "landmark",
        "house_number": "house_number",
        "store_name": "store_name",
        "employee_name": "employee_name",
        "province_kafeel": "province_kafeel",
        "region_kafeel": "region_kafeel",
        "street_kafeel": "street_kafeel",
        "landmark_kafeel": "landmark_kafeel",
        "house_number_kafeel": "house_number_kafeel",
        
    }

successfull response :

    {
        "status": "check the message",
        "message": "Updated rows: 1"
    }



# Endpoint page work 3 | معلومات العمل

POST /work

request

    {
        id :3
        type_of_employment : "",
        employer : "",
        phone_work : "",
        monthly_income_rate : ",
        other_source_of_income : "",
        other_income_value : "",
        is_daman : true,
        job : "
        type_of_employment_kafeel: "", 
        employer_kafeel : "",
        phone_work_kafeel : "962799848222",
        monthly_income_rate_kafeel : "",
        other_source_of_income_kafeel : "",
        other_income_value_kafeel : "",
        job_kafeel: "",
        is_daman_kafeel : false,
    }

Response :

    {
        "status": "check the message",
        "message": "Updated rows: 1"
    }

# Endpoint page car 4  | معلومات المركبة

POST /car

request:
   
    {
        id: 3,
        vehicle_type : "",
        vehicle_situation : "",
        first_payment : "",
        installment_period : "",
    }


Response:

    {
        "status": "check the message",
        "message": "Updated rows: 1"
    }






# Endpoint page files  | مرفقات المدين
POST /madeenfiles

request: form data
   
    {
        id: 3,
        front_id_image : file1,
        back_id_image : file2,
        family_book_image : file3,
        income_certificate: file4,
        daman_image : file5,
        another_attachments: file6

    }


Response:

    {
        "message": "Updated rows: 1"
    }



# Endpoint page kafeelfiles  | مرفقات الكفيل
POST /kafeelfiles

request: form data
   
    {
        id: 3,
        front_id_image_kafeel : file1,
        back_id_image_kafeel : file2,
        family_book_image_kafeel : file3,
        income_certificate_kafeel: file4,
        daman_image_kafeel : file5,
        another_attachments_kafeel: file6

    }


Response:

    {
        "message": "Updated rows: 1"
    }




# Endpoint page signiture  | التوقيع
POST /signiture

request: form data
   
    {
        id: 3,
        signiture : file1

    }


Response:

    {
        "message": "Updated rows: 1"
    }