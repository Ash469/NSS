import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialForm = {
  fullName: '',
  iitgMail: '',
  programme: '',
  branch: '',
  position: ''
};

const JoinTeamForm = () => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.fullName;
    const email = formData.iitgMail;
    const programme = formData.programme;
    const branch = formData.branch;
    const position = formData.position;
    const nssPhoneNumber = '916000942556';

    const message = `Hi NSS Team,\n\nI am ${name}, a ${programme} student at IIT Guwahati, and I would like to apply for the position of ${position} in NSS.\n\nMy Details:\nName: ${name}\nIITG Email ID: ${email}\nProgramme: ${programme}\nBranch: ${branch}\nPosition Applied For: ${position}\n\nThank you for your time and consideration. I look forward to hearing from you.\n\nRegards,\n${name}`;

    const whatsappUrl = `https://wa.me/${nssPhoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  };

  return (
    <section className="bg-slate-50 px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="section-title text-center">Join Our Team</h1>
          <p className="text-center text-gray-600 mt-4">
            Please share your details. After submission, you will be redirected to WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-blue-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-blue-900 mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="iitgMail" className="block text-sm font-medium text-blue-900 mb-2">
                IITG Mail ID
              </label>
              <input
                id="iitgMail"
                name="iitgMail"
                type="email"
                value={formData.iitgMail}
                onChange={handleChange}
                required
                pattern="^[A-Za-z0-9._%+-]+@iitg\\.ac\\.in$"
                placeholder="yourname@iitg.ac.in"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="programme" className="block text-sm font-medium text-blue-900 mb-2">
                Programme
              </label>
              <input
                id="programme"
                name="programme"
                type="text"
                value={formData.programme}
                onChange={handleChange}
                required
                placeholder="B.Tech / M.Tech / PhD ..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-blue-900 mb-2">
                Branch
              </label>
              <input
                id="branch"
                name="branch"
                type="text"
                value={formData.branch}
                onChange={handleChange}
                required
                placeholder="Computer Science / Mechanical / Civil ..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-blue-900 mb-2">
                Position
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select an option</option>
                <option value="APO">APO</option>
                <option value="PO">PO</option>
                <option value="UC">UC</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex justify-center items-center rounded-lg bg-blue-700 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Submit & Open WhatsApp
              </button>
              <Link
                to="/team"
                className="inline-flex justify-center items-center rounded-lg border border-blue-200 px-6 py-3 text-blue-800 font-semibold hover:bg-blue-50 transition-colors"
              >
                Back to Team
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamForm;
