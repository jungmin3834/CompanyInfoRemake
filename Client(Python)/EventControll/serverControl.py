import requests


def send_message_node(url):
    r = requests.get(url)
    print(r.text)
    return r


def get_host_path(request_type):
    url = "http://localhost:3000/"
    return url + request_type


def connect_insert():
    print("insert Connect")


def connect_update():
    print("update Connect")


def connect_delete():
    print("delete Connect")


def connect_delete():
    print("getData Connect")