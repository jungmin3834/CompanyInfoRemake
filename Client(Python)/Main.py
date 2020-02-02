from Window.Ui_MainWindow import Ui_StartWindow

import requests
import json

url = "http://localhost:3000"
data = {'head' : 'Junmin' , 'msg': 'Hi!!!'}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
r = requests.post(url, data=json.dumps(data), headers=headers)

def send_message_node(url):
    params = {'param1': 'jungmin'}
    r = requests.get(url , params= params)

    print(r.text)
    return r


def get_host_path(request_type):
    url = "http://localhost:3000/list"
    return url + request_type


#send_message_node(get_host_path(""))


def MainStart():
    if __name__ == "__main__":
        Ui_StartWindow()

##MainStart()
