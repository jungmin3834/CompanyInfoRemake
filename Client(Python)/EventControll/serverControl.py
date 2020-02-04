import requests


def send_message_node(url):
    r = requests.get(url)
    print(r.text)
    return r

def connectGetAllDBData():
    print("data output")

def get_host_path(request_type):
    url = "http://localhost:3000/"
    return url + request_type


def connect_insert(company):
    import requests
    import json
    url = "http://localhost:3000/insert"

    data = {
        'Company_info':{
            'name': company.company,
            'sales': company.sales,
            'job' : company.job,
            'typed':company.typed,
            'establish':company.establish,
            'location':company.location,
            'qualification':company.qualification,
            'process':company.process,
            'companySales':company.companySales,
            'people':company.people,
            'preferential':company.preferential,
            'welfare':company.welfare
            },
            'passQualification': {
            'grade': company.PassQualification.grade,
            'toeic': company.PassQualification.toeic,
            'toeicSpeaking:':company.PassQualification.toeicSpeacking,
            'opic':company.PassQualification.opic,
            'other':company.PassQualification.other,
            'certificate':company.PassQualification.certificate,
            'experience':company.PassQualification.experience,
            'award':company.PassQualification.award,
            'intern':company.PassQualification.intern,
            'volunteer' : company.PassQualification.volunteer
            }
     }

    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(url, data=json.dumps(data), headers=headers)
    if r.text == "Fail":
        print("실패!")
    else :
        print("성공!")

    print("insert Connect")


def connect_update(company):
    print("update Connect")


def connect_delete(company):
    print("delete Connect")

