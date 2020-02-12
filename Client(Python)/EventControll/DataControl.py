from ClassDirectory.Company import *

def make_comapny_change(company,name):
    data = make_company_data(company)
    data['name'] = {'name' : name}
    return data

def make_company_data(company):
    data = {
        'Company_info': {
            'name': company.company,
            'sales': company.sales,
            'job': company.job,
            'typed': company.typed,
            'establish': company.establish,
            'location': company.location,
            'qualification': company.qualification,
            'process': company.process,
            'companySales': company.companySales,
            'people': company.people,
            'preferential': company.preferential,
            'welfare': company.welfare
        },
        'passQualification': {
            'grade': company.PassQualification.grade,
            'toeic': company.PassQualification.toeic,
            'toeicSpeaking:': company.PassQualification.toeicSpeaking,
            'opic': company.PassQualification.opic,
            'other': company.PassQualification.other,
            'certificate': company.PassQualification.certificate,
            'experience': company.PassQualification.experience,
            'award': company.PassQualification.award,
            'intern': company.PassQualification.intern,
            'volunteer': company.PassQualification.volunteer
        }
    }

    return data


def json_to_array_company(json):
    companylist = []
    size = len(json)
    for i in range(0, size):
        passQualification = PassQualification(toeic=json[i]["toeic"],opic=json[i]["opic"],toeicSpeaking=json[i]["toeicSpeaking"],grade=json[i]["grade"],other=json[i]["other"],
                          certificate=json[i]["certificate"],experience=json[i]["experience"],award=json[i]["award"],intern=json[i]["intern"],volunteer=json[i]["volunteer"])
        company = Company(welfare=json[i]["welfare"],people=json[i]["people"],qualification=json[i]["qualification"],process=json[i]["process"],preferential=json[i]["preferential"],company=json[i]["name"],
                companySales=json[i]["companySales"],sales=json[i]["sales"],typed=json[i]["typed"],location=json[i]["location"],establish=json[i]["establish"],job=json[i]["job"],passQualification=passQualification)
        companylist.append(company)

    return companylist


