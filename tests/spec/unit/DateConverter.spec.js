describe("DateConverter", function () {

  // 31/12/1991" does not conform to the required format, "yyyy-MM-dd".
  describe('toDateInputFormat()', () => {
    it("should parse date from dd/mm/yyy to yyy-MM-dd", function () {
      const date = DateConverter.toDateInputFormat('31/12/2018');
      expect(date).toBe('2018-12-31');
    });

    it("should parse date from dd/mm/yyy to yyy-MM-dd - 2", function () {
      const date = DateConverter.toDateInputFormat('01/12/2018');
      expect(date).toBe('2018-12-01');
    });
  });

  describe('toServerFormat()', () => {
    it("should parse date from yyyy-mm-dd to dd/mm/yyyy", function () {
      const date = DateConverter.toServerFormat('2013-12-31');
      expect(date).toBe('31/12/2013');
    });

    it("should parse date from yyyy-mm-dd to dd/mm/yyyy - 2", function () {
      const date = DateConverter.toServerFormat('2018-12-31');
      expect(date).toBe('31/12/2018');
    });
  });

  describe('minAge18()', () => {
    it("should pass if older than 18", function () {
      const ofAge = DateConverter.isOfAge('1986-12-31');
      expect(ofAge).toBeTruthy();
    });

    it("should not pass if is not of age 18", function () {

      const ofAge = DateConverter.isOfAge('2018-01-01');
      expect(ofAge).toBeFalsy();
    });

  });

});
