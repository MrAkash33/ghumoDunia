import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    // setSubmitted(true);
  };

  return (
    <div className='container'>
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <div className="max-w-6xl mx-auto p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <div className="relative w-full h-64 mb-6">
              <Image
                src="/assets/contact.png"
                alt="Travel Banner"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="bg-gray-100 text-gray-900">
              <div className="mb-6  flex" style={{justifyContent:"space-between"}}>
                <div className="contact_icon">
                  <FaMapMarkerAlt className="text-4xl" />
                  <p style={{display:"inline"}} className="text-lg">123 Travel Street, City</p>
                </div>
                <div className="contact_icon">
                  <FaPhoneAlt className="text-4xl" />
                  <p style={{display:"inline"}} className="text-lg">+123 456 7890</p>
                </div>
                <div className="contact_icon">
                  <FaEnvelope className="text-4xl" />
                  <p style={{display:"inline"}} className="text-lg">contact@travel.com</p>
                </div>
        </div>
    </div>
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-lg font-medium text-left">Name</label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-left">Email</label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-left">Message</label>
              <textarea
                name="message"
                // value={formData.message}
                // onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium shadow-md transition duration-300 hover:bg-blue-600 text-center"
            >
              Send Message
            </button>
          </form>
      </div>
          </div>
        </div>
    </div>
  );
}
