function solution(nums) {
    const maxSelectable = nums.length / 2;
    const uniqueSpecies = new Set(nums).size; // 중복을 제거한 폰켓몬 종류 개수

    return Math.min(maxSelectable, uniqueSpecies);
}

// Set은 중복을 허용하지 않는 컬렉션, 생성자 함수라서 new 붙여야 함