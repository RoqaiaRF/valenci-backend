module.exports = (sequelize, Sequelize) => {
    const Info = sequelize.define(
        "info",
        {
            first_name: {
                type: Sequelize.STRING,
            },
            second_name: {
                type: Sequelize.STRING,
            },

            third_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            national_id: {
                type: Sequelize.STRING,
            },

            type_doc: {
                type: Sequelize.STRING,
            },
            number_doc: {
                type: Sequelize.STRING,
            },
            nationality: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },

            phone: {
                type: Sequelize.STRING,
            },
            is_kafeel: {
                type: Sequelize.BOOLEAN,
            },

            first_name_kafeel: {
                type: Sequelize.STRING,
            },
            second_name_kafeel: {
                type: Sequelize.STRING,
            },
            third_name_kafeel: {
                type: Sequelize.STRING,
            },
            last_name_kafeel: {
                type: Sequelize.STRING,
            },

            national_id_kafeel: {
                type: Sequelize.STRING,
            },
            type_doc_kafeel: {
                type: Sequelize.STRING,
            },
            number_doc_kafeel: {
                type: Sequelize.STRING,
            },
            nationality_kafeel: {
                type: Sequelize.STRING,
            },

            gender_kafeel: {
                type: Sequelize.STRING,
            },
            phone_kafeel: {
                type: Sequelize.STRING,
            },
            province: {
                type: Sequelize.STRING,
            },
            region: {
                type: Sequelize.STRING,
            },
            street: {
                type: Sequelize.STRING,
            },
            landmark: {
                type: Sequelize.STRING
            },
            house_number: {
                type: Sequelize.STRING,
            },
            store_name: {
                type: Sequelize.STRING,
            },

            employee_name: {
                type: Sequelize.STRING,
            },

            province_kafeel: {
                type: Sequelize.STRING,
            },
            region_kafeel: {
                type: Sequelize.STRING,
            },
            street_kafeel: {
                type: Sequelize.STRING,
            },
            landmark_kafeel: {
                type: Sequelize.STRING,
            },

            house_number_kafeel: {
                type: Sequelize.STRING,
            },
           
            type_of_employment: {
                type: Sequelize.STRING,
            },

            employer: {
                type: Sequelize.STRING,
            },
            phone_work: {
                type: Sequelize.STRING,
            },
            monthly_income_rate: {
                type: Sequelize.STRING,
            },
            other_source_of_income: {
                type: Sequelize.STRING,
            },
            other_income_value: {
                type: Sequelize.STRING,
            },
            is_daman: {
                type: Sequelize.BOOLEAN
            },
            type_of_employment_kafeel: {
                type: Sequelize.STRING,
            },
            employer_kafeel: {
                type: Sequelize.STRING,
            },

            phone_work_kafeel: {
                type: Sequelize.STRING,
            },

            monthly_income_rate_kafeel: {
                type: Sequelize.STRING,
            },
            other_source_of_income_kafeel: {
                type: Sequelize.STRING,
            },
            other_income_value_kafeel: {
                type: Sequelize.STRING,
            },
            is_daman_kafeel: {
                type: Sequelize.BOOLEAN,
            },

            vehicle_type: {
                type: Sequelize.STRING,
            },
            vehicle_situation: {
                type: Sequelize.STRING,
            },
            first_payment: {
                type: Sequelize.STRING,
            },
            installment_period: {
                type: Sequelize.STRING,
            },

            front_id_image: {
                type: Sequelize.STRING,
            },
            back_id_image: {
                type: Sequelize.STRING,
            },
            family_book_image: {
                type: Sequelize.STRING,
            },
            income_certificate: {
                type: Sequelize.STRING,
            },
            daman_image: {
                type: Sequelize.STRING,
            },
            another_attachments: {
                type: Sequelize.STRING
            },
            signiture: {
                type: Sequelize.STRING,
            },
            front_id_image_kafeel: {
                type: Sequelize.STRING,
            },

            back_id_image_kafeel: {
                type: Sequelize.STRING,
            },
            family_book_image_kafeel: {
                type: Sequelize.STRING,
            },

            income_certificate_kafeel: {
                type: Sequelize.STRING,
            },
            daman_image_kafeel: {
                type: Sequelize.STRING,
            },
      
           job_kafeel: {
               type: Sequelize.STRING,
            },  
             job: {
               type: Sequelize.STRING,
            },
            another_attachments_kafeel: {
                type: Sequelize.STRING,
            },
            createdAt: {
                field: "created_at",
                type: Sequelize.DATE,
              },
            updatedAt: {
                field: "updated_at",
                type: Sequelize.DATE,
              },
        },
        {
            timestamps: false,
        }
    );
    return Info;
};
