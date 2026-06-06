# Truck Driver Instruction Web-App

## Test on local network 
To test the app in your local network you need `python` installed and then run the following command:
##### 1. Step
```bash
python3 -m http.server 8000
```
OR
```bash
python -m http.server 8000
```

##### 2. Step
**MacOS:**
After that run: 
```bash
ipconfig getifaddr en0
```

**Windows:**
```cmd
ipconfig
```

This will return some IP-address under which the server is reachable within network:
`http://XXX.XX.XXX.XXX:8000`
$\rightarrow$ replace the XXX... by the ip address from step 2.