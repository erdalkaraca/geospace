const t=`import os

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
                ca_file.write(ac.public_bytes(Encoding.PEM))

`;export{t as default};
