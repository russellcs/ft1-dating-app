const x =
  (cUserPref.marriage &&
    cUserPref.casual &&
    userPref.marriage &&
    userPref.casual) || // MC MC
  (cUserPref.marriage &&
    !cUserPref.casual &&
    userPref.marriage &&
    !userPref.casual) || // Mc Mc
  (!cUserPref.marriage &&
    cUserPref.casual &&
    !userPref.marriage &&
    userPref.casual) // mC mC
    ? 10
    : (!cUserPref.marriage &&
        cUserPref.casual &&
        userPref.marriage &&
        !userPref.casual) || // mC Mc
      (cUserPref.marriage &&
        !cUserPref.casual &&
        !userPref.marriage &&
        userPref.casual) // Mc mC
    ? 5
    : -10; // MC Mc, Mc MC, MC cM, MC Cm
