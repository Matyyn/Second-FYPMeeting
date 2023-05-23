import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { TextInput, Checkbox, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Formik } from "formik";
import * as yup from "yup";
import color from "../constants/colors";
import Constants from "expo-constants";
const splashImage = require("../../assets/images/splash.png");

const CreateAccount = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const createAccountValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(3, ({ min }) => `Name must be at least ${min} characters`)
      .required("First Name is Required"),
    lastName: yup
      .string()
      .min(3, ({ min }) => `Name must be at least ${min} characters`)
      .required("Last Name is Required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Image
        resizeMode="cover"
        style={{
          height: "25%",
          width: "65%",
          marginTop: "5%",
          alignSelf: "center",
        }}
        source={splashImage}
      />
      <Text style={styles.text}>Mind Care</Text>
      <Formik
        validationSchema={createAccountValidationSchema}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (values) => {
          const response = await axios.post("/signup",values);
          //   const response = await axios.post("http://localhost:5000/signin", {
          //     header: {
          //       "content-type": "appliction/form-data",
          //     },
          //     body: JSON.stringify(values),
          //   });
          // Alert.alert(null, "Account Created", [
          //   {
          //     text: "Cancel",
          //     onPress: () => console.log("Cancel Pressed"),
          //     style: "cancel",
          //   },
          //   { text: "OK", onPress: () => navigation.navigate("Sign in") },
          // ]);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <KeyboardAwareScrollView>
            <View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  value={values.firstName}
                  placeholder="First Name"
                  style={styles.TextInput}
                  mode="outlined"
                  error={errors.firstName}
                  theme={{
                    colors: {
                      primary: color.lightGrey,
                    },
                  }}
                />
                {errors.firstName && (
                  <Text style={styles.errorText}>{errors.firstName}</Text>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  value={values.lastName}
                  placeholder="Last Name"
                  style={styles.TextInput}
                  mode="outlined"
                  error={errors.lastName}
                  theme={{
                    colors: {
                      primary: color.lightGrey,
                    },
                  }}
                />
                {errors.lastName && (
                  <Text style={styles.errorText}>{errors.lastName}</Text>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  placeholder="Email"
                  style={styles.TextInput}
                  mode="outlined"
                  error={errors.email}
                  theme={{
                    colors: {
                      primary: color.lightGrey,
                    },
                  }}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  placeholder="Password"
                  style={styles.TextInput}
                  mode="outlined"
                  error={errors.password}
                  theme={{
                    colors: {
                      primary: color.lightGrey,
                    },
                  }}
                  secureTextEntry={secureTextEntry}
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        return false;
                      }}
                      backgroundColor="white"
                    />
                  }
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.textInputContainer}>
                <TextInput
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  placeholder="Confirm Password"
                  style={styles.TextInput}
                  mode="outlined"
                  error={errors.confirmPassword}
                  theme={{
                    colors: {
                      primary: color.lightGrey,
                    },
                  }}
                  secureTextEntry={secureTextEntry}
                  right={
                    <TextInput.Icon
                      icon="eye"
                      onPress={() => {
                        setSecureTextEntry(!secureTextEntry);
                        return false;
                      }}
                      backgroundColor="white"
                    />
                  }
                />
                {errors.confirmPassword && (
                  <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                )}
              </View>
            </View>

            <View style={styles.buttonParent}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={!isValid}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Inter_700Bold",
                    fontSize: 20,
                  }}
                >
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 3,
              }}
            >
              <Text style={{ color: color.darkGrey }}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Sign in")}>
                <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: color.grey,
  },
  textInputContainer: {
    marginBottom: 5,
    marginTop: 10,
  },

  TextInput: {
    borderRadius: 15,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
  },
  buttonParent: {
    marginTop: 40,
    alignItems: "center",
  },
  button: {
    backgroundColor: color.grey,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "90%",
  },
  errorText: {
    fontSize: 15,
    color: "red",
    marginLeft: "5%",
  },
});
export default CreateAccount;
