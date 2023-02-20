def legoBlocks(n,m):
    # print(n, 'x', m)
    mod = 10**9 + 7
    
    sigleCombo = [1, 2, 4, 8]

    for i in range(4, m):
        sigleCombo.append(sum(sigleCombo[-4:]) % mod)
    # print("sigleCombo: " + str(sigleCombo))

    totalCombo = [(row**n) % mod for row in sigleCombo]
    # print("totalCombo: " + str(totalCombo))

    validCombo = [1]

    for i in range(1, m):
        invalidCombo = sum([total * valid for total, valid in zip(totalCombo[:i], validCombo[::-1])])
        validCombo.append((totalCombo[i] - invalidCombo) % mod)
        # print("validCombo: " + str(validCombo))
        # print("invalidCombo: " + str(invalidCombo))
        # print("totalCombo: " + str(totalCombo[i]))
    
    return validCombo[-1]

if __name__ == '__main__':
    # print(legoBlocks(2, 2))
    # print(legoBlocks(2, 3))
    # print(legoBlocks(3, 2))
    # print(legoBlocks(3, 3))
    # print(legoBlocks(4, 4))
    print(legoBlocks(4, 9))
