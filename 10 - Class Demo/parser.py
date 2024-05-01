import xml.etree.ElementTree as ET

class xmlInterpreter:
  def __init__(self, xml = None):
    self.text = ''
    if xml[0] == '<':
        doc = ET.fromstring(xml)
        self.text = ET.tostring(doc).decode('ascii')
        temp = self.text
        while(temp[0] != '>'):
            temp = temp[1:-1]
        temp = temp[1:-2]
        xml = xmlInterpreter(temp)
        setattr(self, doc.tag, xml)
    elif xml is not None:
        self.text = xml

xml = "<?xml version='1.0' encoding='utf-8'?><State><City>New York</City></State>"
xml = xmlInterpreter(xml)
print(xml.text)
print(xml.State.text)
print(xml.State.City.text)

