import requests
import json


def send_message_node(url):
    r = requests.get(url)
    print(r.text)
    return r


def get_host_path(request_type):
    url = "http://localhost:3000/"
    return url + request_type


def connect_get_all_data():
    print("data output")
    r = requests.post(get_host_path('select'))
    js = r.json()


def connect_insert(company):
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(connect_get_all_data('insert'), data=json.dumps(make_company_data(company)), headers=headers)

    if r.text == "Fail":
        print("실패!")
    else :
        print("성공!")

    print("insert Connect")


def connect_update(company):
    print("update Connect")
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(get_host_path('select'), data=json.dumps(make_company_data(company)), headers=headers)


def connect_delete(company):
    print("delete Connect")
    r = requests.get(get_host_path('delete'), name=company.company)


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
            'toeicSpeaking:': company.PassQualification.toeicSpeacking,
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
