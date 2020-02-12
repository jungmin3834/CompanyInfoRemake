

var queryDataControl = { 
queryDataMake(data)
{
    if(data == null)
        return null;
    var company = data.Company_info;
    var passQualification = data.passQualification;
    var prename = data.name;
    
    var queryCompanyData  = {
        name: company.name, 
        companySales: company.sales, 
        establish: company.establish, 
        job: company.job, 
        location: company.location,
        people: company.people,
        preferential: company.preferential,
        process: company.process,
        qualification: company.qualification,
        sales: company.sales,
        typed: company.typed,
        welfare: company.welfare,
    };
    
    var queryPassQualificationData = {
        name : company.name, 
        grade: passQualification.grade,
        toeic: passQualification.toeic,
        toeicSpeaking: passQualification.toeicSpeaking,
        opic: passQualification.opic,
        other: passQualification.other,
        certificate: passQualification.certificate,
        experience: passQualification.experience,
        award: passQualification.award,
        intern: passQualification.intern,
        volunteer : passQualification.volunteer
    };

    var datalist = {queryCompanyData, queryPassQualificationData, prename};
    return datalist;
}
};

module.exports.queryDataControl = queryDataControl;


