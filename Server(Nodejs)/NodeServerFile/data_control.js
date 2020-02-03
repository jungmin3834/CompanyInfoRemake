
var query_data_make = function(data)
{
    if(data == null)
        return null;

    var company = data.company;
    var passQualification = data.qualification;

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
        toeicSpeacking: passQualification.toeicSpeacking,
        opic: passQualification.opic,
        other: passQualification.other,
        certificate: passQualification.certificate,
        experience: passQualification.experience,
        award: passQualification.award,
        intern: passQualification.intern,
        volunteer : passQualification.volunteer
    };

    var datalist = {queryCompanyData, queryPassQualificationData};
    return datalist;
}
