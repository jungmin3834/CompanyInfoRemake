import requests
import json
from EventControll.DataControl import *

def send_message_node(url):
    r = requests.get(url)
    print(r.text)
    return r


def get_host_path(request_type):
    url = "http://localhost:3000/"
    return url + request_type


def connect_get_all_data():
    print("data output")
    r = requests.post(get_host_path('selectall'))

    return json_to_array_company(r.json())


def connect_insert(company):
    print(company['Company_info'])
    data = make_company_data(company)
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(get_host_path('insert'), data=json.dumps(data), headers=headers)

    if r.text == "Fail":
        print("실패!")
    else :
        print("성공!")

    print("insert Connect")


def connect_update(company):
    print("update Connect")
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    r = requests.post(get_host_path('update'), data=json.dumps(make_company_data(company)), headers=headers)


def connect_delete(company):
    print("delete Connect")
    r = requests.get(get_host_path('delete'), name=company.company)



