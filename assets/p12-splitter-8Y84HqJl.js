import{P as d}from"./geospace-app-Dim86q1_.js";import"./preload-helper-WQhrSmCl.js";import"./index-CJNm_9Df.js";const l=`import os

from cryptography.hazmat.primitives.serialization import pkcs12, Encoding, PrivateFormat, NoEncryption


def p12splitter(p12_path, password=None, output_path=None):
    if output_path is None:
        output_path = os.path.dirname(p12_path)

    if p12_path is None:
        return

    cert_name = os.path.basename(p12_path)

    # Read the .p12 file
    with open(p12_path, "rb") as f:
        p12_data = f.read()

    if password is not None:
        password = password.encode("utf-8")

    # Load the PKCS#12 container
    private_key, certificate, additional_certs = pkcs12.load_key_and_certificates(p12_data, password)

    # Write the private key
    with open(os.path.join(output_path, f"{cert_name}.key.pem"), "wb") as key_file:
        key_file.write(private_key.private_bytes(
            encoding=Encoding.PEM,
            format=PrivateFormat.TraditionalOpenSSL,
            encryption_algorithm=NoEncryption()
        ))

    # Write the main certificate
    with open(os.path.join(output_path, f"{cert_name}.cert.pem"), "wb") as cert_file:
        cert_file.write(certificate.public_bytes(Encoding.PEM))

    # Optionally, write any additional certs (CA chain/intermediates)
    if additional_certs:
        with open(os.path.join(output_path, f"{cert_name}.chain.pem"), "wb") as ca_file:
            for ac in additional_certs:
                ca_file.write(ac.public_bytes(Encoding.PEM))`,m=({toastError:n,toastInfo:p,commandRegistry:r,taskService:o,workspaceService:s})=>{r.registerAll({command:{id:"p12split",name:".p12 file splitter",description:"Splits/separates a .p12 file into private/public and additional .pem files; WARNING: keep the private pem file secret as it will be unprotected after extraction",parameters:[{name:"p12_path",description:"Path of the .p12 file to split",required:!0},{name:"password",description:"The password of the .p12 file, will prompt for input if not specified, use empty string for no password",required:!1},{name:"output_path",description:"Directory path of the files to write to, if not provided, will be parent directory of p12_path",required:!1}]},handler:{execute:async({params:{p12_path:c,password:e,output_path:i}})=>{const a=await s.getWorkspace();a||n("No Workspace selected!"),await o.runAsync("Splitting .p12 certificate file",async()=>{const t=new d;await t.init(a),await t.loadPackages(["cryptography"]),await t.execCode(l),await t.runFunction("p12splitter",{p12_path:c,password:e==='""'?void 0:e,output_path:i==='""'?"":i}),p(".p12 file successfully splitted")})}}})};export{m as default};
