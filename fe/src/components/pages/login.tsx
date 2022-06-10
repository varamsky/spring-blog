import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

const Login = () => {
    return (
        <div className="row login-row justify-content-center">
            <div className="col-lg-4 col-md-7 login-form">
                <div>
                    <p className="mt-4 fs-4 mx-5">
                        Spring blog
                    </p>
                    <Form
                        className="mx-5 text-start"
                    >
                        <FormGroup controlId="formBasicEmail" className="mb-3">
                            <FormLabel className="fw-bold">Email</FormLabel>
                            <FormControl type="email" placeholder="Enter email" size="lg" />
                        </FormGroup>
                        <FormGroup controlId="formBasicPassword" className="mb-3">
                            <FormLabel className="fw-bold">Password</FormLabel>
                            <FormControl
                                type="password"
                                placeholder="Enter password"
                                size="lg"
                            />
                        </FormGroup>
                        <Button
                            type="submit"
                            color="primary"
                            className="mt-2"
                            size="lg"
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Login;