$content = Get-Content -Path 'd:\Projects\Quantum_website\src\pages\Internship.jsx' -Raw
$regex = '(?s){/\* How to Apply Section \*/}.*?(?=<div className="max-w-4xl mx-auto rounded-\[1rem\])'
$replacement = @'
        {/* How to Apply Section */}
          <Card id="how-to-apply" className="max-w-4xl mx-auto scroll-mt-24 mb-20 bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-none rounded-[1.5rem] p-8 md:p-12">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#0c2340] font-serif mb-2">How to Apply</h2>
              <p className="text-[#3b82f6] text-lg">
                Steps to take the Internship @ QuDAIS Lab, IIIT Kottayam
              </p>
            </div>
            
            <div className="space-y-0">
              
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-200 group rounded-xl md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold flex items-center justify-center rounded-lg mt-0.5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">1</div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Get Consent from a Mentor</h4>
                    <p className="text-slate-800 font-medium md:text-[15px] leading-relaxed">
                      Select a mentor from Faculties @ QuDAIS Research Lab based on your Domain of Interest and contact them through e-mail (with CV and other accomplishments).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-200 group rounded-xl md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start md:items-center gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold flex items-center justify-center rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">2</div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Download Consent Form</h4>
                    <p className="text-slate-800 font-medium md:text-[15px] leading-relaxed">
                      Get consent (e-signed copy) from the mentor in the prescribed format.
                    </p>
                  </div>
                </div>
                <div className="ml-14 md:ml-0 md:flex-shrink-0 mt-3 md:mt-0">
                  <a href={internshipDetails.links.consentForm} download className="inline-flex items-center px-5 py-2.5 bg-[#0c2340] text-white text-[13px] font-semibold rounded-lg shadow-sm hover:bg-[#1a365d] transition-colors">
                    Consent Form <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-200 group rounded-xl md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold flex items-center justify-center rounded-lg mt-0.5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">3</div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Internship Fee Payment</h4>
                    <div className="text-slate-800 font-medium text-[15px] leading-relaxed space-y-1">
                      <p>Pay the fee through SBI Collect:</p>
                      <p className="font-normal text-slate-500">1. Go to SBI Collect</p>
                      <p className="font-normal text-slate-500">2. Select Type of Institution: Educational Institutes</p>
                      <p className="font-normal text-slate-500">3. Institution name: IIIT Kottayam (type first four letters in the search box)</p>
                      <p className="font-normal text-slate-500">4. Payment Category: QuDAIS Research Lab</p>
                      <p className="font-semibold text-slate-500 mt-2 text-sm italic">Note down the transaction number (DU Number) and save the receipt as a PDF.</p>
                    </div>
                  </div>
                </div>
                <div className="ml-14 md:ml-0 md:flex-shrink-0 md:self-center mt-3 md:mt-0">
                  <a href={internshipDetails.links.payment} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 bg-[#0c2340] text-white text-[13px] font-semibold rounded-lg shadow-sm hover:bg-[#1a365d] transition-colors">
                    SBI Collect <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors duration-200 group rounded-xl md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start md:items-center gap-4 px-4 md:px-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold flex items-center justify-center rounded-lg group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">4</div>
                  <div>
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Bonafide Certificate</h4>
                    <p className="text-slate-800 font-medium md:text-[15px] leading-relaxed">
                      Get Bonafide Certificate from the Institute where you are undergoing the current course, in the prescribed format.
                    </p>
                  </div>
                </div>
                <div className="ml-14 md:ml-0 md:flex-shrink-0 mt-3 md:mt-0">
                  <a href={internshipDetails.links.bonafideFormat} download className="inline-flex items-center px-5 py-2.5 bg-[#0c2340] text-white text-[13px] font-semibold rounded-lg shadow-sm hover:bg-[#1a365d] transition-colors">
                    Bonafide Format <ExternalLinkIcon />
                  </a>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-6 pb-2 hover:bg-slate-50/50 transition-colors duration-200 group rounded-xl md:px-4 -mx-4 md:mx-0 gap-4">
                <div className="flex items-start gap-4 px-4 md:px-0 w-full mb-3 md:mb-0">
                  <div className="flex-shrink-0 w-8 h-8 bg-slate-100 text-slate-500 font-bold flex items-center justify-center rounded-lg mt-0.5 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">5</div>
                  <div className="flex-grow">
                    <h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Register Online</h4>
                    <p className="text-slate-800 font-medium text-[15px] mt-1 md:mb-1 leading-relaxed max-w-2xl">
                      Visit the Registration Page, enter the details asked on the form, upload all necessary documents, and click Final Submit. 
                      <span className="block mt-2 font-normal text-slate-500 text-sm">You will get a confirmation cum acknowledgement email from the QuDAIS Lab within the next 2 working days.</span>
                    </p>
                  </div>
                </div>
                <div className="ml-14 md:ml-0 md:flex-shrink-0 md:self-start md:mt-3 mt-1">
                  <a href={internshipDetails.links.registration} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#3b82f6] text-white text-[14px] font-bold rounded-lg shadow-[0_4px_14px_rgba(59,130,246,0.3)] hover:bg-[#2563eb] hover:shadow-[0_6px_20px_rgba(59,130,246,0.4)] transition-all">
                    Register Now <ExternalLinkIcon />
                  </a>
                </div>
              </div>

            </div>
          </Card>

          <div className="max-w-4xl mx-auto rounded-[1rem]'@
$content = $content -replace $regex, $replacement
Set-Content -Path 'd:\Projects\Quantum_website\src\pages\Internship.jsx' -Value $content
'Done'
