# valenci-backend


# Endpoint page 1:
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


# Endpoint page 2:
 POST : /address

 Request: 	body

{       "id": "3",
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
        "store_name_kafeel": "store_name_kafeel",
        "employee_name_kafeel": "employee_name_kafeel"
}

successfull response :

{
    "status": "check the message",
    "message": "Updated rows: 1"
}



# Endpoint page work 3

POST /work

request {
        id :3
        type_of_employment : "",
        employer : "",
        phone_work : "",
        monthly_income_rate : ",
        other_source_of_income : "",
        other_income_value : "",
        is_daman : true,
        type_of_employment_kafeel: "", 
        employer_kafeel : "",
        phone_work_kafeel : "962799848222",
        monthly_income_rate_kafeel : "",
        other_source_of_income_kafeel : "",
        other_income_value_kafeel : "",
        is_daman_kafeel : false,
}

Response :

{
    "status": "check the message",
    "message": "Updated rows: 1"
}