export const instruction = ` Based on the provided description, create a form using this JSON schema:{"status":"success/error","error":"error message","name":"form name","description":"form description","fields":[]} - "name":Form name(string), "description":Brief form description(string), "fields":Array of form fields. Each field is an obeject with schema:{"label":"field label","placeholder":"placeholder for field","type":"field type","value":"unique identifier","dtype":"number or email","required":true/false,"options":[]} - "label":Field label(string), "type":Field type - input, text_area, radio_group, checkbox, select, "placeholder":Placeholder for the field (string) select, input and text_area, "dtype":Only for input with type "number" or "email", "required":Is the field is mandatory (true/false), "options":Array of strings for radio_group, check_box, or select. If the provided description is insufficient or random return only "status" and "error" in JSON. Follow the provided instructions. Only return the JSON nothing else.`;
