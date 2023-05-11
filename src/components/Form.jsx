import React, {useState, useEffect} from "react"

export default function Form(){
    const [selectedService, setSelectedService] = useState('')
    const [phone, setPhone] = useState(["", "", ""]);
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleSelect = (e) => {
        setSelectedService(e.target.value)
    }

    const handlePhoneChange = (e, index) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone((prevPhone) => {
          const newPhone = [...prevPhone];
          newPhone[index] = value.slice(0, index === 2 ? 4 : 3); // Limit the current input to 4 or 3 characters

          setPhoneNumber(`(${newPhone[0]}) ${newPhone[1]}-${newPhone[2]}`);
          return newPhone;
        });
      };
      
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        const url = "https://script.google.com/macros/s/AKfycbwxLKGbIiJr_-hw-qFxbtCl-njt5Pu8hrioTixHbmR3VWSCenjw2K3tsFZL66FSE7zn/exec";
        const data = new FormData(e.target);
        
        try {
          const response = await fetch(url, { method: "POST", body: data });
          const json = await response.json();
          
          console.log(json);
        } catch (error) {
          console.error(error);
        }
      };

    
// https://script.google.com/macros/s/AKfycbwQQ5awu4M1Pf8V_DOkaS1eoFaSUR-yXL0KgvcsZXRxBapLm6SwUYKFXuXymGskTXze/exec
    return(
        <div className="form-container">
            <div id="quote" className="form-titles">
                <h2 className="form-title">COMPANY NAME</h2>
                <h4 className="form-subtitle">WINDOW TINT & CLEAR BRA</h4>
            </div>
            <div>
                <form  onSubmit={handleSubmit} className="form">
                    <p className="form-question">Which Services are you interest in? <span className="star">*</span></p>
                    <div className="form-bubbles-container">
                        <label htmlFor="services" name="services">
                            <input
                                className="form-bubbles"
                                type="radio"
                                name="Services"
                                value="Window Tint"
                                checked={selectedService === "Window Tint"}
                                onChange={handleSelect}
                            />
                        Window Tint
                        </label>
                        <label htmlFor="services">
                            <input
                                className="form-bubbles"
                                type="radio"
                                name="Services"
                                value="Clear Bra"
                                checked={selectedService === "Clear Bra"}
                                onChange={handleSelect}
                            />
                        Clear Bra
                        </label>
                        <label htmlFor="services" >
                            <input
                                className="form-bubbles"
                                type="radio"
                                name="Services"
                                value="Security Film"
                                checked={selectedService === "Security Film"}
                                onChange={handleSelect}
                            />
                        Security Film
                        </label>
                    </div>
                    <p className="input-labels">Name <span className="star">*</span></p>
                    <div className="names-container">
                        <label htmlFor="" className="names">
                            <input type="text" name="First Name" required/>
                            First Name
                        </label>
                        <label htmlFor="" className="names"> 
                            <input type="text" name="Last Name" required/>
                            Last Name
                        </label>
                    </div>
                    
                    <p className="input-labels">Phone Number <span className="star">*</span></p>
                    <input
                        type="hidden"
                        name="Phone Number"
                        value={phoneNumber}
                    />

                    <div className="phone-container">
                        <div className="phone-input w-12">
                            <input
                                className="phone-num"
                                type="text"
                                maxLength={3}
                                value={phone[0]}
                                onChange={(e) => handlePhoneChange(e, 0)}
                            />
                        <p>(###)</p>
                        </div>
                        <div className="phone-input w-12">
                            <input
                                className="phone-num"
                                type="text"
                                maxLength={3}
                                value={phone[1]}
                                onChange={(e) => handlePhoneChange(e, 1)}
                            />
                        <p>###</p>
                        </div>
                        <div className="phone-input w-16">
                            <input
                                className="phone-num"
                                type="text"
                                maxLength={4}
                                value={phone[2]}
                                onChange={(e) => handlePhoneChange(e, 2)}
                            />
                        <p>####</p>
                        </div>
                    </div>
                    <p className="input-labels">Email Address <span className="star">*</span></p>
                    <label htmlFor="">
                        <input 
                            className="email-input"
                            type="email" 
                            name="Email Address"
                            required 
                        />
                    </label>
                    <p className="input-labels">Details <span className="star">*</span></p>
                    <p className="details-description">Please be as descriptive as possible so we can accurately quote your project.</p>
                    <label htmlFor="">
                        <input 
                        className="details-input"
                        type="text" 
                        name="Details"
                        placeholder="(Year, Make, Model and number of windows)" 
                        required
                        />
                    </label>
                    <button className="form-btn">Get Quote</button>
                </form>
            </div>

        </div>

    )
}