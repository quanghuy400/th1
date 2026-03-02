import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

 
  const isValidPhone = phone.replace(/\s/g, '').length === 10;


  const formatPhone = (text) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 10);

    const match = cleaned.match(/^(\d{0,4})(\d{0,3})(\d{0,3})$/);

    if (!match) return cleaned;

    return [match[1], match[2], match[3]]
      .filter(Boolean)
      .join(' ');
  };

  
  const handleChange = (text) => {
    const formatted = formatPhone(text);
    setPhone(formatted);

    const raw = formatted.replace(/\s/g, '');

    if (raw.length === 0) {
      setError('');
    } else if (raw.length < 10) {
      setError('Số điện thoại phải đủ 10 chữ số');
    } else {
      setError('');
    }
  };

  
  const validateOnClick = () => {
    if (!isValidPhone) {
      setError('Số điện thoại không đúng định dạng');
      return;
    }

    Alert.alert('Thành công', 'Số điện thoại hợp lệ!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại Housing
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="number-pad"
        value={phone}
        onChangeText={handleChange}
      />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          isValidPhone && styles.buttonActive
        ]}
        onPress={validateOnClick}
        disabled={!isValidPhone}
      >
        <Text
          style={[
            styles.buttonText,
            isValidPhone && styles.buttonTextActive
          ]}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  desc: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 13,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#fff',
  },
});